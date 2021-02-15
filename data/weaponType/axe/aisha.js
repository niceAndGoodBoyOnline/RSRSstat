import { makeStyle } from '../../../js/module/styleConstructor.js'

let thisSeries = "Romancing Saga 1"
let thisWeapon = "Axe"
let styleList  = []

let aishaButterflies = new makeStyle(
  "Come to Me, Butterflies",
  [0,2,0,1,-1,-1,0,-2],
  "Earth:None",
  "SS",
  "Platinum",
  thisSeries,
  thisWeapon
)
styleList.push(aishaButterflies)


let aishaGives = new makeStyle(
  "Winter Gives Way to Spring",
  [3,-3,0,3,0,-3,0,0],
  "Earth:None",
  "S",
  "Platinum",
  thisSeries,
  thisWeapon
)
styleList.push(aishaGives)


export let aishaList   = {
                  "name" : "Aisha",
                  "styles" : styleList
                }
