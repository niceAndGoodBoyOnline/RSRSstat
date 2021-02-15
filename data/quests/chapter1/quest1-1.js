// first number == stat, second number == HP
let cap1 = {
  normal   : [ 12, 380 ],
  hard     : [ 15, 410 ],
  veryHard : [ 24, 500]
}

// name could be used in UI
// Quest 1-1-1 to 1-1-5 all have the same max stats.
// We add it 4 times to the export list for downstream design
export let quest1_1DataList = {
    name : 'Polka Lynn Wood, Acrobat: 1-1-',
    quests : [ cap1, cap1, cap1, cap1 ],
    chapter : 1
}
