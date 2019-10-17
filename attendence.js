var checkRecord = function(s) {
    let aCount = 0;
    let lCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            aCount++;
        }
        if (s[i] === 'L' && s[i] + 1 === 'L' && s[i] + 2 === 'L') {
            lCount++;
            console.log(s[i])
        }
    }
    if (aCount < 2 && lCount < 0) {
        return true;
    }
    return false;
};

console.log(checkRecord("PPALLL"))
console.log(checkRecord("PPALLP"))