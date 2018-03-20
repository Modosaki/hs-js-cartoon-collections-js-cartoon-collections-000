function dwarfRollCall(dwarves) {
 var text =[]
 var i = 0
 for (let i= 0; i < dwarves.length; i++)

text.push(`${i+1}. ${dwarves[i]} `)
return text.join("")
}


function summonCaptainPlanet(planeteerCalls){
<<<<<<< HEAD
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
=======
var x = planeteerCalls;
 arr.forEach(function(x,i) {
   arr[i] = v.toUpperCase() +'!';
});
}

function longPlaneteerCalls(words) {
  var lengths = words.map(function(word) {
  return word.length >= 4;
});

>>>>>>> d5518cb83b5dcbb3c38b864476c9899b01f2d360
}


function findTheCheese (foods) {
var cheese = ['cheddar', 'gouda', 'camebert'];
 var x = foods.find(function find(snacks){return snacks == 'gouda' || snacks == 'cheddar' || snacks == 'camebert'})
  if (x===undefined){return 'no cheese!'}
  else {return x}
}

function firstb(foods){
 var x=[]
 var i = 0
 for (let i= 0; i < foods.length; i++);.
 
 if (foods[i].startsWith("b")){return [x]
  

  
}
}