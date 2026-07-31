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
    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    let totalWeights = 0;

    for (let i = 0; i < weights.length; i++) {
        totalWeights += weights[i];
    }

    if (totalWeights <= 400) {
        return true;
    } else {
        return false;
    }
}

// problem-3
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let extraUsed = (tokensUsed - 500) / 100;

    return Math.floor(extraUsed) * 5;
}

// problem-4
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let maxRating = restaurants[0];

    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > maxRating.rating) {
            maxRating = restaurants[i];
        }
    }

    return maxRating.name.toUpperCase();
}

// problem-5
function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }
    if (times.length === 0) {
        return "Invalid";
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];

        if (typeof times[i] !== "number") {
            return "Invalid";
        }
    }

    return total / times.length;
}
