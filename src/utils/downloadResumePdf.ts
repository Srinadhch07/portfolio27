import type { MouseEvent } from "react";

const RESUME_FILE_NAME = "Srinadh_Chintakindi_Resume.pdf";
let activeFrame: HTMLIFrameElement | null = null;

export async function downloadResumePdf(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  if (activeFrame) {
    return;
  }

  const { default: html2pdf } = await import("html2pdf.js");

  const frame = document.createElement("iframe");
  frame.src = "/resume.html";
  frame.setAttribute("aria-hidden", "true");
  frame.setAttribute("tabindex", "-1");
  Object.assign(frame.style, {
    position: "fixed",
    left: "-10000px",
    top: "0",
    width: "794px",
    height: "1123px",
    border: "0",
    opacity: "0",
    pointerEvents: "none",
  });

  document.body.appendChild(frame);
  activeFrame = frame;

  try {
    await new Promise<void>((resolve, reject) => {
      frame.addEventListener("load", () => resolve(), { once: true });
      frame.addEventListener(
        "error",
        () => reject(new Error("Resume document failed to load")),
        { once: true },
      );
    });

    const doc = frame.contentDocument;

    if (!doc) {
      throw new Error("Resume document is unavailable");
    }

    await doc.fonts.ready;
    doc.querySelector(".topbar")?.remove();
    doc.querySelectorAll(".no-pdf").forEach((element) => element.remove());
    doc.body.style.background = "#ffffff";

    await html2pdf()
      .set({
        margin: 0,
        filename: RESUME_FILE_NAME,
        image: { type: "jpeg", quality: 0.98 },
        enableLinks: false,
        html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(doc.body)
      .save();
  } finally {
    frame.remove();
    activeFrame = null;
  }
}
