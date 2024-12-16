//window.alert("cal");
function add(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum= parseInt(num1)+parseInt(num2);
    //window.alert(sum);
    document.getElementById('result').innerHTML=sum;
}
function sub(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var subtract= parseInt(num1)-parseInt(num2);
    //window.alert(sum);
    document.getElementById('result').innerHTML=subtract;
}
function mul(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var multiplay= parseInt(num1)*parseInt(num2);
    //window.alert(sum);
    document.getElementById('result').innerHTML=multiplay;
}
function div(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var divide= parseInt(num1)/parseInt(num2);
    //window.alert(sum);
    document.getElementById('result').innerHTML=divide;
}