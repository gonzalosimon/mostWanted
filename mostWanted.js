// The key of the map is his actual name. 
// The value contains possible aliases the criminal has used. 
// The police is interviewing people that have been in contact with one of them. 
// They don't know if the criminal used their name or an alias.

// Write a function that returns the most probable criminal having the name (provided by interviewed people) as an input. 
// The function should return a string in the following shape: "First name: name. Aliases: alias0, alias1, aliasN". 
// If there is no match, the response should be "No match". 
// Of course, matching the actual name of the criminal is more meaningful than matching an alias and having an exact match is more meaningful than a partial match.
var criminals = [
    ["Paul White", "Roger Night, Peter Llong Jr."], 
    ["Roger Fedexer", "Rob Ford, Pete Lord, Roger McWire"],
    ["Paul White Jr.", null],
    ["Red Fortress", "Roger Rabbit, Ross Winter"],
    ["Redford Fort", "Red Strong, Red Fort"]
];

function mostWanted(name){
   for(var i = 0; i < criminals.length; i++) {
    
    if(name === null) {
      return "First name: " + criminals[2][0] + " Aliases: " + criminals[2][1];
    }

    var criminalName = criminals[i][0] ? criminals[i][0].toLowerCase() : '';
    var checkName = criminalName.includes(name.toLowerCase());

    if(name === "") {
      return "No match"
    }
    
    if(checkName) {
        return "First name: " + criminals[i][0] + "."  + " Aliases: " + criminals[i][1];
    } 
  }

  for(var i = 0; i < criminals.length; i++) {
    var criminalAliases = criminals[i][1] ? criminals[i][1].toLowerCase() : '';
    var checkAlias = criminalAliases.includes(name.toLowerCase());

    if(name === "") {
      return "No match"
    }
    
    else if(name === null) {
      return "First name: " + criminals[i][0] + " Aliases: " + criminals[i][1];
    }

    if(checkAlias) {
      return "First name: " + criminals[i][0] + "."  + " Aliases: " + criminals[i][1];
    } 
  }

  return "No match";
}



console.log(mostWanted("")) // No match
console.log(mostWanted("John Paul")) // No match

console.log(mostWanted("paul White")) // should of course return the first entry.
console.log(mostWanted("Roger")) // should return the second entry. There are 2 more guys using "Roger" as an alias, but since the actual name of the second one is Roger, it has more weight.
console.log(mostWanted("Ross")) // should return the 4th entry. 
console.log(mostWanted("white jr.")) // should return the third entry.

console.log(mostWanted(null)) // it'll return the third entry (the one without aliases)
console.log(mostWanted("Red")) // should return fourth entry
console.log(mostWanted("fedexer")) // should return the second entry

console.log(mostWanted("rabbit")) // should return fourth entry

module.exports = mostWanted;
