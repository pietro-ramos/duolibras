"use client";
import { useEffect } from "react";

export default function VLibrasWidget() {
  useEffect(() => {
    const oldScript = document.getElementById("vlibras-plugin-script");
    if (oldScript) oldScript.remove();

    const oldWidget = document.querySelector("div[vw]");
    if (oldWidget) oldWidget.remove();

    const script = document.createElement("script");
    script.id = "vlibras-plugin-script";
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };
    document.body.appendChild(script);
  }, []);

  return null;
}