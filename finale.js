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
