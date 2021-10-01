var canvas,ctx
console.log("mycanvas")
canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle="orange"
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",lol)
function lol(e){
    mouse_x = e.clientX - canvas.offsetLeft; mouse_y = e.clientY - canvas.offsetTop;
    console.log("X:"+mouse_x); console.log("Y:"+mouse_y);
    ctx.beginPath();
 ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI)
 ctx.stroke()       
}