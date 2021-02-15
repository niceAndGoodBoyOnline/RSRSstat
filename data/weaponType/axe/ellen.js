import { makeStyle } from '../../../js/module/styleConstructor.js'

let thisSeries = "Romancing Saga 3"
let thisWeapon = "Axe"
let styleList  = []

let ellenAbyss = new makeStyle(
  "Before the Abyss Gate",
  [0,5,-3,3,-1,-3,-1,0],
  "None;None",
  "SS",
  "Limited",
  { "tagName" : "value" },
  thisSeries,
  thisWeapon
)
styleList.push(ellenAbyss)


let ellenPack = new makeStyle(
  "This Pack Is Heavy",
  [5,0,3,0,-2,-3,-2,0],
  "None;None",
  "SS",
  "Platinum",
  { "tagName" : "value" },
  thisSeries,
  thisWeapon
)
styleList.push(ellenPack)


let ellenGood = new makeStyle(
  "Nothing Like a Good Axe",
  [3,3,0,0,0,-6,0,0],
  "None;None",
  "S",
  "Platinum",
  { "tagName" : "value" },
  thisSeries,
  thisWeapon
)
styleList.push(ellenGood)


export let ellenList   = {
                  "name" : "Ellen",
                  "styles" : styleList
                }
