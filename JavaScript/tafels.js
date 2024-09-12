var getallenArray = [2, 4, 6, 8];

function schrijfTafels(getallen, elementId) {
    var resultDiv = document.getElementById(elementId);
    
    getallen.forEach(getal => {
        var titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = 'De tafel van ' + getal;
        resultDiv.appendChild(titleDiv);

        for (var i = 1; i <= 10; i++) {
            var result = i * getal;
            var sumDiv = document.createElement('div');
            sumDiv.textContent = i + " x " + getal + " = " + result;
            resultDiv.appendChild(sumDiv);
        }
    });
}

schrijfTafels(getallenArray, 'tafels');
