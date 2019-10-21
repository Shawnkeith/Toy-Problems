var checkRecord = function(s) {
    let aCount = 0;
    let lCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            aCount++;
        }
        console.log(s[i + 1]);
        if (s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L') {
            lCount++;
        }
    }
    if (aCount < 2 && lCount < 1) {
        return true;
    }
    return false;
};

console.log(checkRecord("PPALLL"))
console.log(checkRecord("PPALLP"))