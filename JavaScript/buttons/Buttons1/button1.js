function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

document.getElementById('container').innerHTML = `
    <div class="panel">
        <button class="color-button green" onclick="changeBackgroundColor('green')">Groen</button>
        <button class="color-button red" onclick="changeBackgroundColor('red')">Rood</button>
        <button class="color-button blue" onclick="changeBackgroundColor('blue')">Blauw</button>
    </div>
`;
