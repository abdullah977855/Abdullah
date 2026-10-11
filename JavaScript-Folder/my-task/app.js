function enrolledStudent(print) {
    var studentName = prompt("Enter Your Name");
    if (studentName) {
        setTimeout(() => {
            var rollNo = Math.trunc(Math.random() * 100);
            console.log(rollNo);
            print(studentName, rollNo);
        }, 2000)
    }else{
        alert("Name field was empty")
    }
}

function printDeatils(name, no){
    document.write("Student Name: " + name + "<br>");
    document.write("Roll no: " + no);
}

enrolledStudent(printDeatils)