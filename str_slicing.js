function string(str) {
    if (str.length >=3)
      {
        return str.slice(-3) + str.slice(0, -3);
        // // return str.slice(-3)
        // return str.slice(0,-3)
      }
 return str;
}
console.log(string("Superstition"))
