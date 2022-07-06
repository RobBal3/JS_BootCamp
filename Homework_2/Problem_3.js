// 3) Capitalize each of an array of names

function capitalizeNames(arr) {
  return arr.map((item) => {
    let firstChar = item.split("")[0];
    let remChars = item.slice(1);

    return firstChar.toUpperCase() + remChars.toLowerCase(); // the same can be implemented with ASCI and charcodes.
  });
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
