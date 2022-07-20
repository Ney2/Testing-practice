function capitalizeString(string) {
    let str = string.slice(1).toLowerCase();
    let first = string.charAt(0).toUpperCase();
    string = first + str;
    return string;
}
module.exports = capitalizeString