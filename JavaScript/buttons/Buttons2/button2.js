var totalButtons = 30;
var buttonsPerRow = 5;

var container = document.getElementById('container');

for (var i = 1; i <= totalButtons; i++) {
    var button = document.createElement('button');
    button.innerHTML = i;

    button.addEventListener('click', function() {
        // Controleert de achtergrondkleur van de knop.
        if (this.style.backgroundColor === 'red') {
            // Als de kleur rood is, verandert het in groen.
            this.style.backgroundColor = 'green';
        } else {
            // Als de kleur iets anders is, verander het in rood.
            this.style.backgroundColor = 'red';
        }
    });
    
    container.appendChild(button);
}
