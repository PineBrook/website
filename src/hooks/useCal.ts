import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export function openCal(e?: React.MouseEvent<HTMLElement>) {
  if (typeof window !== "undefined") {
    const target = e?.currentTarget;
    const calLink = target?.getAttribute("data-cal-link") || "pinebrook";
    if (window.Cal) {
      window.Cal("openModal", {
        calLink,
        config: { layout: "month_view" }
      });
    } else {
      window.open(`https://cal.com/${calLink}`, "_blank");
    }
  }
}

export function useCalEmbed() {
  useEffect(() => {
    (function (C: any, A: any, L: string, t: string) {
      C["Cal"] = C["Cal"] || function () {
        let o = C["Cal"].q = C["Cal"].q || [];
        o.push(arguments);
      };
      C["Cal"].loaded = true;
      let p = A.createElement(L);
      p.src = t;
      p.async = true;
      let firstScript = A.getElementsByTagName(L)[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(p, firstScript);
      } else {
        A.head.appendChild(p);
      }
    })(window, document, "script", "https://embed.cal.com/embed/parent.js");

    window.Cal?.("init", {
      origin: "https://cal.com",
    });

    window.Cal?.("ui", {
      theme: "dark",
      styles: {
        branding: {
          brandColor: "#020617",
        },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);
}
