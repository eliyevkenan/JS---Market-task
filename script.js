let vegetables=document.querySelectorAll("vegetb");
let boxes1=document.querySelector("box");
let fruits=document.querySelectorAll("frut");
let boxes2=document.querySelector("box-1");
let dropItem;

vegetb.ondragstart=function(e){
    e.dataTransfer.setData("vtb",this.id)
}
boxes1.ondragover=(e)=>{
    e.preventDefault();
}
boxes1.ondrop=(e)=>{
    let dropItem=document.getElementById(e.dataTransfer.getData("vtb"))
}


fruits.ondragstart=function(e){
    e.dataTransfer.setData("frt",this.id)
}
boxes2.ondragover=(e)=>{
    e.preventDefault();
}
boxes2.ondrop=(e)=>{
    let dropItem=document.getElementById(e.dataTransfer.getData("frt"))
}

