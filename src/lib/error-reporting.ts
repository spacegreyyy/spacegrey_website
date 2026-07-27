type ErrorOptions = {
    mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
    handled?: boolean;
    severity?: "error" | "warning" | "info";
};

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
    if (typeof window === "undefined") return;

    const message =
        error instanceof Response
            ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
            : error instanceof Error
                ? error.message
                : String(error);

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
        console.error("[SpaceGrey Error Reporter]", message, context);
    }
}
