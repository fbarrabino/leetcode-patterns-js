/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maximoActual = Math.max(...candies);

    return candies.map(caramelo => caramelo + extraCandies >= maximoActual);
};
