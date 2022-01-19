canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown",My_mousedown);
function My_mousedown(e)
{
    color=document.getElementById("Color").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.LineWidth = 5;
    ctx.arc(mouse_x,mouse_y,40,0,2* Math.PI);
    ctx.stroke();
}