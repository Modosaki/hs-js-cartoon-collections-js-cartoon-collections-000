function dwarfRollCall(dwarves) {
 var text =[]
 var i = 0
 for (let i= 0; i < dwarves.length; i++)

text.push(`${i+1}. ${dwarves[i]} `)
return text.join("")
}


function summonCaptainPlanet(planeteerCalls){
planeteerCalls.forEach(function(v,i) {
   planeteerCalls[i] = v.toUpperCase() +'!';
});
return planeteerCalls

}

function longPlaneteerCalls(words) {
 var x =  words.map(function(word) {
  return word.length > 4});
if (x[0]===true)
 {return true}
 else {return false}
}


function findTheCheese (foods) {
var cheese = ['cheddar', 'gouda', 'camebert'];
 var x = foods.find(function find(snacks){return snacks == 'gouda' || snacks == 'cheddar' || snacks == 'camebert'})
  if (x===undefined){return 'no cheese!'}
  else {return x}
}
