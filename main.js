var arrayStudent=[];


function submit(){
    var name1=document.getElementById("nameofstudent1").value;
    var name2=document.getElementById("nameofstudent2").value;
    var name3=document.getElementById("nameofstudent3").value;
    var name4=document.getElementById("nameofstudent4").value;
    var name5=document.getElementById("nameofstudent5").value;
    arrayStudent.push(name1)
    arrayStudent.push(name2)
    arrayStudent.push(name3)
    arrayStudent.push(name4)
    arrayStudent.push(name5)
    console.log(arrayStudent);
    document.getElementById("display_name").innerHTML=arrayStudent;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}

function sorting(){
    arrayStudent.sort();
    console.log(arrayStudent);
    document.getElementById("display_name").innerHTML=arrayStudent;
}