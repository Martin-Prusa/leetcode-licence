const s = "2-5g-3-J";
const k = 2;

const licenseKeyFormatting = function (s, k) {
  const s2 = s.replaceAll("-", "").toUpperCase().split("").reverse();
  let v = [];

  while(s2.length > 0) {
    v.push(s2.splice(0, k))
  }

  return v.map((i) => i.reverse().join("")).reverse().join("-");
};

console.log(licenseKeyFormatting(s, k))