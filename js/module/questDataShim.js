let questList    = []

import { gaidenG2_2DataList } from '../../../data/quests/chapter1/gaiden2-2.js'
questList.push(gaidenG2_2DataList)

import { gaidenG2_1DataList } from '../../../data/quests/chapter1/gaiden2-1.js'
questList.push(gaidenG2_1DataList)

import { quest1_1DataList } from '../../../data/quests/chapter1/quest1-1.js'
questList.push(quest1_1DataList)

console.log(questList[0])

let questSelect1     = document.getElementById('questSelect1')
let questSelect2     = document.getElementById('questSelect2')
let chapterSelect    = document.getElementById('chapterSelect')
let difficultySelect = document.getElementById('difficultySelect')

let currentStatCap   = [0,0]
let nextStatCap      = [0,0]
let setCap           = document.getElementById('setStatCapButton')
let unsetCap         = document.getElementById('unsetStatCapButton')
setCap.addEventListener("click", function(){setStatCap()});
unsetCap.addEventListener("click", function(){unsetStatCap()});

function setStatCap(){
  let questName = questSelect1.options[questSelect1.selectedIndex].textContent
  let stageNumber = questSelect2.options[questSelect2.selectedIndex].textContent
  let chapter = chapterSelect.options[chapterSelect.selectedIndex].textContent
  let difficulty = difficultySelect.options[difficultySelect.selectedIndex].id

  for (let i = 0; i < questList.length;i++){
    if (questName == questList[i].name && chapter == questList[i].chapter) {
      nextStatCap = questList[i].quests[stageNumber][difficulty]
      updateTable(nextStatCap);
    }
  }
}

function unsetStatCap(){
  let resetStatCap = [0,0]
  updateTable(resetStatCap)
}

function updateTable(nextStatCap) {
  let displayTable     = document.getElementById('displayTable')

  console.log("current:" + currentStatCap[0])
  console.log("next:" + nextStatCap[0])
  for (let i = 0, row; row = displayTable.rows[i]; i++){
    for (let j = 1, col; col = row.cells[j]; j++){
      col.innerHTML = ( parseInt(col.innerHTML) - currentStatCap[0] + nextStatCap[0] )
    }
  }
  currentStatCap = nextStatCap

}

function appendData(){
  for (let i = 0; i < questList.length;i++){
    let thisOption = document.createElement('option')
    thisOption.innerHTML = questList[i].name
    thisOption.id = questList[i].name
    questSelect1.appendChild(thisOption)
  }
}

appendData()
unsetStatCap()
