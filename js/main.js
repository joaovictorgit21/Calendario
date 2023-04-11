//Function of input 

function colorDate() {
    let day   = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let clndr = document.getElementById('calendario');

    let data = clndr.getElementsByTagName('td')[parseInt(day)+5].style.background = color;
}