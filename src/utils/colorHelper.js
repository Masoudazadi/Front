const tailwindColors = {
    red: "#ef4444",
    orange: "#f97316",
    amber: "#f59e0b",
    yellow: "#eab308",
    lime: "#84cc16",
    green: "#22c55e",
    emerald: "#10b981",
    teal: "#14b8a6",
    cyan: "#06b6d4",
    sky: "#0ea5e9",
    blue: "#3b82f6",
    indigo: "#6366f1",
    violet: "#8b5cf6",
    purple: "#a855f7",
    fuchsia: "#d946ef",
    pink: "#ec4899",
    rose: "#f43f5e",
    gray: "#6b7280",
    slate: "#64748b",
    zinc: "#71717a",
    neutral: "#737373",
    stone: "#78716c",
    black: "#000000",
    white: "#ffffff",
};

const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, "");
    let bigint = parseInt(hex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

const colorDistance = (rgb1, rgb2) => {
    return Math.sqrt(
        Math.pow(rgb1[0] - rgb2[0], 2) +
        Math.pow(rgb1[1] - rgb2[1], 2) +
        Math.pow(rgb1[2] - rgb2[2], 2)
    );
};

const getClosestTailwindColor = (hex) => {
    let inputRgb = hexToRgb(hex);
    let closestColor = "";
    let minDistance = Infinity;

    for (let [name, colorHex] of Object.entries(tailwindColors)) {
        let colorRgb = hexToRgb(colorHex);
        let distance = colorDistance(inputRgb, colorRgb);

        if (distance < minDistance) {
            minDistance = distance;
            closestColor = name;
        }
    }

    return closestColor;
};

export default getClosestTailwindColor;