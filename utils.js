const fetch = require("node-fetch");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  getQuote:function() { 
    return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
  },
  getRoll:function(command){
    let regex=/(\d+)?d(\d+)([\+\-]\d+)?/ig;
    if (command.match(regex)) {
      const splitDice=command.split('d');
      var score=0;
      var text="";
      for (var i = 0; i < splitDice[0]; i++) {
        var random = getRandomInt(1,parseInt(splitDice[1])+1);
        score=score+random;
        text=text+random+"+";
      }


      return "You rolled :" + score +"(" + text.substring(0, text.length - 1)+")";
    }
    else{
      return "Invalid dice!"
    }
  }
};