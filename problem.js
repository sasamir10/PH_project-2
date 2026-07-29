// problem-3
function calculateAiCost(tokensUsed) {
    let extraUsed = (tokensUsed - 500) / 100;
    let rate = 5;

    let totalCharge = Math.floor(extraUsed) * rate;

    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    } else if (tokensUsed <= 500) {
        return 0;
    }

    return totalCharge;
}

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(600));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));
