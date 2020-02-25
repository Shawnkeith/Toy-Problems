function goodVsEvil(good, evil) {
    var goodTotal = 0;
    var evilTotal = 0;
    var goodArr = good.split(' ');
    var evilArr = evil.split(' ');

    if (goodArr[0] > 0) {
        let hobbits = Number(goodArr[0])
        goodTotal += hobbits;
    }
    if (goodArr[1] > 0) {
        let men = Number(goodArr[1]) * 2
        goodTotal += men;
    }
    if (goodArr[2] > 0) {
        let elves = Number(goodArr[2]) * 3
        goodTotal += elves;
    }
    if (goodArr[3] > 0) {
        let dwarves = Number(goodArr[3]) * 3
        goodTotal += dwarves;
    }
    if (goodArr[4] > 0) {
        let eagles = Number(goodArr[4]) * 4
        goodTotal += eagles;
    }
    if (goodArr[5] > 0) {
        let wizards = Number(goodArr[5]) * 10
        goodTotal += wizards;
    }

    if (evilArr[0] > 0) {
        let orcs = Number(evilArr[0])
        evilTotal += orcs;
    }
    if (evilArr[1] > 0) {
        let men = Number(evilArr[1]) * 2
        evilTotal += men;
    }
    if (evilArr[2] > 0) {
        let wargs = Number(evilArr[2]) * 2
        evilTotal += wargs;
    }
    if (evilArr[3] > 0) {
        let goblins = Number(evilArr[3]) * 2
        evilTotal += goblins;
    }
    if (evilArr[4] > 0) {
        let urukHai = Number(evilArr[4]) * 3
        evilTotal += urukHai;
    }
    if (evilArr[5] > 0) {
        let trolls = Number(evilArr[5]) * 5
        evilTotal += trolls;
    }
    if (evilArr[6] > 0) {
        let wizards = Number(evilArr[6]) * 10
        evilTotal += wizards;
    }
    console.log(goodArr)
    console.log(evilArr)
    console.log(evilTotal);
    console.log(goodTotal);

    if (goodTotal > evilTotal) {
        return "Battle Result: Good triumphs over Evil";
    } else if (goodTotal < evilTotal) {
        return "Battle Result: Evil eradicates all trace of Good";
    }
    return "Battle Result: No victor on this battle field";
}


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
console.log(goodVsEvil('132 196 432 622 929 373', '761 683 48 801 805 463 176'));