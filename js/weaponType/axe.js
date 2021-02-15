import { ellenList } from '../../../data/weaponType/axe/ellen.js'
import { aishaList } from '../../../data/weaponType/axe/aisha.js'


var characters = document.getElementById("characters")
var displayZone = document.getElementById("displayZone")
var displayTable = document.getElementById("displayTable")
var statName = ["STR","END","DEX","AGI","INT","WIL","LOV","CHA"]

function buildCharacterList(){
  for (let i = 0;i < characterList.length; i++){
    let thisCharacter = document.createElement('BUTTON')
    thisCharacter.innerHTML = characterList[i].name;
    thisCharacter.addEventListener("click", function(){displayCharacter(characterList[i].name,characterList[i].styles)});
    characters.appendChild(thisCharacter);
  }
}

function displayCharacter(name, styleList){
  displayTable.innerHTML = ""; // clear previous table
  let charTableHead = document.createElement('th');
  charTableHead.innerHTML = name;
  displayTable.appendChild(charTableHead);

  for (let i = 0; i < statName.length;i++) {
    let thisHeader = document.createElement('th');
    thisHeader.innerHTML = statName[i];
    displayTable.appendChild(thisHeader);
  }

  for (let i = 0; i < styleList.length;i++) {
    let thisRow = document.createElement('tr');
    thisRow.id = styleList[i].style
    displayTable.appendChild(thisRow);
    let thisStyle = document.createElement('td');
    thisStyle.innerHTML = styleList[i].style
    thisRow.appendChild(thisStyle)
    for (let j = 0; j < styleList[i].stats.length;j++) {
      let thisCell = document.createElement('td');
      thisCell.innerHTML = styleList[i].stats[j]
      thisRow.appendChild(thisCell)
    }
  }
}

let characterList = [ ellenList, aishaList ]
buildCharacterList()
displayCharacter(ellenList.name, ellenList.styles)
