let result=document.getElementById("inputtext");

let press=(number)=>{
    result.value+=number;
}
let Result=()=>{
    try{

        result.value=eval(result.value)
    }
    catch(err){
        alert("enter valid result");
    }
}
function clr(){
    result.value=" "
}
function del(){
    result.value=result.value.slice(0,-1)
}
function sin(){
    result.value=Math.sin(result.value)
}
function cos(){
    result.value=Math.cos(result.value)
}
function tan(){
    result.value=Math.tan(result.value)
}