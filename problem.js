// problem-4

function topRatedRestaurant(restaurants) {
    let maxRating = 0;

    for (let i = 0; i < restaurants.length; i++) {
        if (maxRating < restaurants[i].rating) {
            maxRating = restaurants[i].name.toUpperCase();
        }
    }
    return maxRating;

    if (!Array.isArray(restaurants)) {
        return "Invalid";
    }
}

console.log(
    topRatedRestaurant([
        { name: "Chillox", rating: 4.5 },
        { name: "Sultan's Dine", rating: 4.8 },
    ]),
);
