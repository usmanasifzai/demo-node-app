const reverseString = function(str) {
  return !str ? '' : str.trim().split("").reverse().join("");
}

export default reverseString;
