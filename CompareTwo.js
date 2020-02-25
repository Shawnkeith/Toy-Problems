function compareIntegers(a, b) {
    console.log(a.slice(-1))
    console.log(b.slice(-1))
    if (Number(b) === Number(a)) {
        if (a.slice(-1) > b.slice(-1)) {
            return 'greater';
        } else if (b.slice(-1) > a.slice(-1)) {
            return 'less';
        }
        return 'equal';
    } else if (Number(a) > Number(b)) {
        return 'greater';
    } else if (Number(a) < Number(b))
        return 'less';
}

console.log(compareIntegers("999", "1000"))
console.log(compareIntegers('1000', '1000'))
console.log(compareIntegers("1000000000000000000000000000000000", "1000000000000000000000000000000001"))
console.log(compareIntegers("1000000000000000000000000000000002", "1000000000000000000000000000000001"))
console.log(compareIntegers("10000000000000000000000000000000000", "1000000000000000000000000000000001"))