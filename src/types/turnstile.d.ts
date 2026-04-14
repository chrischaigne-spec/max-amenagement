interface TurnstileInstance {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "compact" | "flexible";
    }
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

interface Window {
  turnstile: TurnstileInstance;
}
