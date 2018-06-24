// 15 seconds
var quest1 = {
    text: "What was the first video game on console to allow a save ?",
    objDOM: "",
    id: "quest1",
    answers: {
        ans1: {
            text: "Metroid",
            value: false
        },
        ans2: {
            text: "Mike Tyson's Punch Out",
            value: false

        },
        ans3: {
            text: "Duck Hunt",
            value: false
        },
        ans4: {
            text: "Legend of Zelda",
            value: true
        }
    }
}
console.log(quest1.text);
console.log(quest1.answers.ans4);
// 15 seconds
var quest2 = {
    text: "The first First-person-shooter game doom came out in what year?",
    objDOM: "",
    id: "quest2",
    answers: {
        ans1: {
            text: "1991",
            value: false
        },
        ans2: {
            text: "1992",
            value: false
        },
        ans3: {
            text: "1993",
            value: true
        },
        ans4: {
            text: "1994",
            value: false
        }
    }
}
console.log(quest2.answers.ans1);
// 15 seconds
var quest3 = {
    text: "When did the game Mortal Kombat come to the home consoles?",
    objDOM: "",
    id: "quest3",
    answers: {
        ans1: {
            text: "1991",
            value: false
        },
        ans2: {
            text: "1992",
            value: false
        },
        ans3: {
            text: "1993",
            value: true
        },
        ans4: {
            text: "1994",
            value: false
        }
    }
}
// 10 seconds
var quest4 = {
    text: "Tetris is from which counrty ?",
    objDOM: "",
    id: "quest4",
    answers: {
        ans1: {
            text: "Japan",
            value: false
        },
        ans2: {
            text: "America",
            value: false
        },
        ans3: {
            text: "Serbia",
            value: false
        },
        ans4: {
            text: "Russia",
            value: true
        }
    }
}
// 15 seconds
var quest5 = {
    text: "What game on the Playstation 4 has more players than Xbox One and PC combined ?",
    objDOM: "",
    id: "quest5",
    answers: {
        ans1: {
            text: "Overwatch",
            value: false
        },
        ans2: {
            text: "Destiny",
            value: false
        },
        ans3: {
            text: "Battlefield 1",
            value: false
        },
        ans4: {
            text: "Star Wars Battlefront",
            value: true
        }
    }
}
// 15 seconds
var quest6 = {
    text: "Who is the brother of Liquid Snake in the Metal Gear game series ?",
    objDOM: "",
    id: "quest6",
    answers: {
        ans1: {
            text: "Big Boss",
            value: false
        },
        ans2: {
            text: "Boss Sanke",
            value: false
        },
        ans3: {
            text: "Venom Sanke",
            value: false
        },
        ans4: {
            text: "Solid Snake",
            value: true
        }
    }
}
// 10 seconds
var quest7 = {
    text: "What is the best selling video game of all time ?",
    objDOM: "",
    id: "guest7",
    answers: {
        ans1: {
            text: "tetris",
            value: true
        },
        ans2: {
            text: "Minecraft",
            value: false
        },
        ans3: {
            text: "Grand Theft Auto V",
            value: false
        },
        ans4: {
            text: "Super Mario Bros.",
            value: false
        }
    }
}
// 10 seconds
var quest8 = {
    text: "Which field of study is the basis of Tomb Radier ?",
    objDOM: "",
    id: "guest8",
    answers: {
        ans1: {
            text: "Paleontology",
            value: false
        },
        ans2: {
            text: "Geology",
            value: false
        },
        ans3: {
            text: "anthropology",
            value: false
        },
        ans4: {
            text: "archaeology",
            value: true
        }
    }
}
// 10 seconds
var quest9 = {
    text: "What is the name of the hero in the God of War Series ?",
    objDOM: "",
    id: "guest9",
    answers: {
        ans1: {
            text: "Zeus",
            value: false
        },
        ans2: {
            text: "Ares",
            value: false
        },
        ans3: {
            text: "Apollo",
            value: false
        },
        ans4: {
            text: "Kratos",
            value: true
        }
    }
}
// 5 seconds
var quest10 = {
    text: "What does Mario do for a living ?",
    objDOM: "",
    id: "quest10",
    answers: {
        ans1: {
            text: "Carpenter",
            value: false
        },
        ans2: {
            text: "Mushroom dealer",
            value: false
        },
        ans3: {
            text: "He has no job",
            value: false
        },
        ans4: {
            text: "Plumber",
            value: true
        }

    }
}
var questions = {
    quest1,
    quest2,
    quest3,
    quest4,
    quest5,
    quest6,
    quest7,
    quest8,
    quest9,
    quest10
};
$("#question").text(quest1.text);
for (let question in questions) {
    let curHTML = "<div id='"+questions[question].id +"'> <span>" + questions[question].text + "</span></br>";
    for (let answer in questions[question].answers) {
        curHTML += "<input type='radio' name='" + questions[question].id + "'value='" + questions[question].answers[answer].value + "'>" + questions[question].answers[answer].text + "</input><br>";
    }
    curHTML += "</div>";
    $("#question-area").append(curHTML);
  
}
$("input").on("click",function(){
    // alert(($(this).val() === false))
    if($(this).val() === "false"){
      alert("There can be only one!");
    }
    else{
    alert("dammit, you win");
    }
});
let timeLeft = 120;
let timer = setInterval(function(){
   timeLeft--;
   $("#clock").html(Math.floor(timeLeft/60) + ":" + timeLeft%60);
   if(timeLeft == 0){
      clearInterval(timer);
      time();
   }
},1000);

console.log(quest10.answers)
var time = function () {
    alert("Game Over")
};

