let questions = [
    {
        question: "SMIT STAND........?",
        Option: [
            "Saylani mass it training",
            "Saylani It training",
            "Smit",
            "Saylani"
        ],
        answer: "Saylani mass it training"
    },
    {
        question: "HTML",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "ML"
    },
    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    },
    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    },
    {
        question: "JS",
        Option: [
            "PL",
            "ML",
            "SL",
            "ALL"
        ],
        answer: "SL"
    },

]

let question = document.getElementById("question")
let qno = document.getElementById("qno")

let options = document.querySelectorAll("input")
let label = document.querySelectorAll("label")

let button = document.querySelector("button")
let index = 0;
let score = 0;

console.log(options[0])
console.log(label)
console.log(button)

button.addEventListener("click", function () {
    // alert("ok")
    nextQuestion()
})

function showQuestion() {

    question.innerText = questions[index].question
    qno.innerText = "Question " + (index + 1) + " of " + questions.length


    options[0].value = questions[index].Option[0]
    options[1].value = questions[index].Option[1]
    options[2].value = questions[index].Option[2]
    options[3].value = questions[index].Option[3]

    label[0].innerText = questions[index].Option[0]
    label[1].innerText = questions[index].Option[1]
    label[2].innerText = questions[index].Option[2]
    label[3].innerText = questions[index].Option[3]

    options[0].checked = false
    options[1].checked = false
    options[2].checked = false
    options[3].checked = false

    if (index == questions.length - 1) {
        button.innerText = "Submit"
    }


}

function CheckAnswer() {

    let selectedOption;

    if (options[0].checked == true) {
        selectedOption = options[0].value

    }

    else if (options[1].checked == true) {
        selectedOption = options[1].value

    }
    else if (options[2].checked == true) {
        selectedOption = options[2].value

    }
    else if (options[3].checked == true) {
        selectedOption = options[3].value

    }
    console.log(options[0].checked)
    console.log(options[1].checked)
    console.log(options[2].checked)
    console.log(options[3].checked)

    console.log(selectedOption)
    if (selectedOption == undefined) {
        alert("Bhai select one option")
        return false
    }
    else {
        console.log(selectedOption)
        console.log(questions[index].answer)

        if(selectedOption==questions[index].answer){
            score=score+1;
        }
        console.log(score)

        return true
    }
}

function nextQuestion() {
    let status = CheckAnswer()
    if (status == true) {
         index = index + 1
        if (index == questions.length) {
            alert("quiz submit")
            document.getElementById("container").innerHTML=`
            <h1>Quiz Submit</h1>
            <h2>Score ${score}</h2>
            <button>Again Test</button>
            `

        }
        else {
             
            showQuestion()

        }

    }

}

showQuestion()