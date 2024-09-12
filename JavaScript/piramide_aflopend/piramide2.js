var getal = parseInt(prompt('Voer een getal in:'), 10);

var array = [];
for (var i = 0; i <= getal; i++) {
    array.push(i);
}

function schrijfAflopendePiramide(arr, elementId) {
    var resultDiv = document.getElementById(elementId);
    
    var arrayDiv = document.createElement('div');
    arrayDiv.textContent = 'Array: ' + arr.join(',');
    resultDiv.appendChild(arrayDiv);
    
    for (var i = arr.length; i >= 0; i--) {
        var line = arr.slice(0, i).join('');
        var lineDiv = document.createElement('div');
        lineDiv.textContent = line;
        resultDiv.appendChild(lineDiv);
    }
}

schrijfAflopendePiramide(array, 'piramide');
