// problem-4

function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let maxRating = restaurants[0].rating;

    for (let i = 0; i < restaurants.length; i++) {
        if (maxRating < restaurants[i].rating) {
            maxRating = restaurants[i].name.toUpperCase();
        }

        if (restaurants.length === 1) {
            maxRating = restaurants[0].name.toUpperCase();
        }
    }
    return maxRating;
}
