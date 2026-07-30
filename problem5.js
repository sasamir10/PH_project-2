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
