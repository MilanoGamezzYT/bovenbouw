var getal = parseInt(prompt('Voer een getal in:'), 10);

var array = [];
for (var i = 0; i <= getal; i++) {
    array.push(i);
}

function schrijfPiramide(arr, elementId) {
    var resultDiv = document.getElementById(elementId);
    
    var arrayDiv = document.createElement('div');
    arrayDiv.textContent = 'Array: ' + arr.join(',');
    resultDiv.appendChild(arrayDiv);
    
    for (var i = 0; i < arr.length; i++) {
        var line = arr.slice(0, i + 1).join('');
        var lineDiv = document.createElement('div');
        lineDiv.textContent = line;
        resultDiv.appendChild(lineDiv);
    }
}

schrijfPiramide(array, 'piramide');
