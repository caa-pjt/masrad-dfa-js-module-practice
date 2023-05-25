

export function getCurrentTime() {
    const date = new Date();
    return date.toLocaleTimeString("fr-CH", {
        hour: "2-digit",
        minute: "2-digit"
    });
}