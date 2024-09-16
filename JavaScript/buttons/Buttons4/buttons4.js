var totalButtons = 30;
var buttonsPerRow = 5;

var container = document.getElementById('container');

// Kleurvolgorde (aanpasbaar)
var kleurvolgorde = ['green', 'red', 'purple', 'pink', 'black'];

for (var i = 1; i <= totalButtons; i++) {
    var button = document.createElement('button');
    button.innerHTML = i;

    button.dataset.clickCount = '0';
    button.style.backgroundColor = kleurvolgorde[0]; // Startkleur groen

    button.addEventListener('click', function() {
        var clickCount = parseInt(this.dataset.clickCount, 10);
        clickCount = clickCount + 1;
        this.dataset.clickCount = clickCount;

        // Checken of de klik binnen de lengte van de kleurvolgorde valt
        if (clickCount < kleurvolgorde.length) {
            this.style.backgroundColor = kleurvolgorde[clickCount];
        } else {
            var placeholder = document.createElement('div');
            placeholder.className = 'placeholder';
            this.parentNode.replaceChild(placeholder, this);
        }
    });

    container.appendChild(button);
}
