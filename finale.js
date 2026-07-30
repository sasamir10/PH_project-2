// problem-1
function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    } else if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamAGoals < teamBGoals) {
        return "Team B Won";
    } else {
        return "Draw";
    }
}

// problem-2
function isElevatorSafe(weights) {
    let totalWeights = 0;

    for (let i = 0; i < weights.length; i++) {
        totalWeights += weights[i];
    }

    if (!Array.isArray(weights)) {
        return "Invalid";
    } else if (totalWeights <= 400) {
        return true;
    } else {
        return false;
    }
}

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
