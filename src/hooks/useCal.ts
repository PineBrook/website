import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
    CalIsLoaded?: boolean;
  }
}

export function openCal(e?: React.MouseEvent<HTMLElement>) {
  if (typeof window !== "undefined") {
    const width = 800;
    const height = 750;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      "https://calendar.app.google/7PdCsQddyDbsyNHt7",
      "GoogleCalendar",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
  }
}

export function useCalEmbed() {
  // No-op since we are using Google Calendar popup directly for 100% reliability
  useEffect(() => {}, []);
}
