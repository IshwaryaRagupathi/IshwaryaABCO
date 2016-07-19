var filled;
var symbol;
var winConditions;
var turn = 0;
var CanvasNo;
var c;
var draw;
var squaresFilled = 0;
window.onload=function(){
filled = new Array();
symbol = new Array();
winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
for(var i = 0; i <= 8; i++){
filled[i] = false;
symbol[i]='';
}
}
function canvasClicked(cc){
CanvasNo = "c"+cc;
c = document.getElementById(CanvasNo);
draw = c.getContext("2d");
if(filled[cc-1] ==false){
if(turn%2==0){
draw.beginPath();
draw.moveTo(60,50);
draw.lineTo(260,120);
draw.moveTo(260,50);
draw.lineTo(60,120);
draw.stroke();
draw.closePath();
symbol[cc-1] = 'X';
}
else{
draw.beginPath();
draw.arc(150,90,50,0,Math.PI*2,true);
draw.stroke();
draw.closePath();
symbol[cc-1] = 'O';
}
turn++;
filled[cc-1] = true;
squaresFilled++;
Winnercheck(symbol[cc-1]);
if(squaresFilled==9){
alert("THE MATCH IS DRAW!");
location.reload(true);
}
}
else{
alert("THE SQUARE IS ALREADY OCCUPIED! PLEASE CHOOSE THE EMPTY SQUARE");
}
}
function Winnercheck(s){
for(var a = 0; a < winConditions.length; a++){
if(symbol[winConditions[a][0]]==s&&symbol[winConditions[a][1]]==s&&symbol[winConditions[a][2]]==s){
alert(s+ " WON!");
location.reload(true);
}
}
}