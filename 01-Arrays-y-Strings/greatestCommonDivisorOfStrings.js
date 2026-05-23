/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    let divisorLength = gcd(str1.length, str2.length);

    // Sabiendo que el "ladrillo" mide 2 letras, cortamos str1 desde la posición 0 hasta la 2.
    return str1.substring(0, divisorLength);
};
