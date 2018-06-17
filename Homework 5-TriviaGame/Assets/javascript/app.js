
var question =  [
    {
        promp: "A very old looking teenage girl wears hotpants & learns to smoke to win her boyfriend back. Then they sing.\n(a)The Dark Knight\n\(b)How Harry met Sally\n(c)grease",
        answer: "c"
    }
]


for (var i=0; i<questions.length;i++)
    for response = window.prompt("questions[i].prompt");
    if(response==questions[i].answer){
        score++;
        alert("correct");
    }else{
        aler("wrong!")
    }
    }
    alert("you got" score +"/"+questions.length)