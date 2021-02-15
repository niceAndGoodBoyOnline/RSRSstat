// first number == stat, second number == HP
let cap1 = {
  normal   : [ 45, 710 ],
  hard     : [ 45, 710 ],
  veryHard : [ 74, 1000]
}

let cap2 = {
  normal   : [ 45, 710 ],
  hard     : [ 45, 710 ],
  veryHard : [ 75, 1010]
}

// name could be used in UI
// Gaiden 2 1-1-1 to 1-1-4 all have the same max stats, 1-1-5 has +1 and +10
// We add cap1 4 times to the export list for downstream design, and cap2 once
export let gaidenG2_1DataList = {
    name : 'Gaiden 2. Dorra & Byunie G2-1-',
    quests : [ cap1, cap1, cap1, cap1, cap2 ],
    chapter : 1
}
