var totalButtons = 30;
var buttonsPerRow = 5;

var container = document.getElementById('container');

for (var i = 1; i <= totalButtons; i++) {
    var button = document.createElement('button');
    button.innerHTML = i;

    button.dataset.clickCount = '0';

    button.addEventListener('click', function() {
        var clickCount = parseInt(this.dataset.clickCount, 10);
        clickCount = clickCount + 1;
        this.dataset.clickCount = clickCount;

        if (clickCount === 1) {
            this.style.backgroundColor = 'red';
        } else if (clickCount === 2) {
            this.style.backgroundColor = 'purple';
        } else if (clickCount === 3) {
            this.style.backgroundColor = 'blue';
        } else if (clickCount === 4) {
            this.style.backgroundColor = 'black';
        } else if (clickCount === 5) {
            var placeholder = document.createElement('div');
            placeholder.className = 'placeholder';
            this.parentNode.replaceChild(placeholder, this);
        }
    });

    container.appendChild(button);
}
