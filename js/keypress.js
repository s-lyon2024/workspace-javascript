//event
/* JS method for keyup
var messageE = document.getElementById('message');
messageE.addEventListener('keyup',showKey);
*/

$('#message').keyup(showKey);

document.addEventListener('mousemove', showPosition);


// event handler

function showKey(e){
    console.log(e.key);
    document.getElementById('lastKey').textContent = "The key is " + e.key;
}

function showPosition(me) {
    console.log("The X coordinate is " + me.pageX + " and the Y coordinate is " + me.pageY);
    document.getElementById('movePage').textContent = "You're moving! Your coordinates are " + me.pageX + ", " + me.pageY + ".";
}

const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 150, 100);
