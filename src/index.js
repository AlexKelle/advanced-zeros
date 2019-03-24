module.exports = function getZerosCount(number, base) {
  function findPowerOfP(number, power) {
    let count = 0;
    let r = power;

    while (r <= number) {
      count += Math.floor(number / r);
      r = r * power;
    }
    return count;
  }
  function primeFactorsOfB(base) {
    const results = [];

    for (let i = 2; base !== 1; i++) {
      if (base % i === 0) {
        let count = 0;
        while (base % i === 0) {
          base = Math.floor(base / i);
          count++;
        }

        results.push({ base: i, count });
      }
    }
    return results;
  }
  const primeFactors = primeFactorsOfB(base);
  let result = Number.MAX_VALUE;
  for (let i = 0; i < primeFactors.length; i++) {
    result = Math.min(result, Math.floor(findPowerOfP(number, primeFactors[i].base) / primeFactors[i].count));
  }
  return result;
};