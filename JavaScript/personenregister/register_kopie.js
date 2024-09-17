function laadGegevens() {
    fetch('opdracht2_bijlage.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Netwerkrespons was niet ok');
            }
            return response.json();
        })
        .then(data => {
            toonGegevens(data);
        })
        .catch(error => {
            console.error('Fout bij het laden van JSON:', error);
        });
}

function toonGegevens(personenData) {
    const gegevensDiv = document.getElementById('gegevens');
    let output = '';

    personenData.forEach(persoon => {
        output += `
            <div class="persoon">
                <p><strong>Voornaam:</strong> ${persoon.voornaam}</p>
                <p><strong>Achternaam:</strong> ${persoon.achternaam}</p>
                <p><strong>Nationaliteit:</strong> ${persoon.nationaliteit}</p>
                <p><strong>Leeftijd:</strong> ${persoon.leeftijd}</p>
                <p><strong>Gewicht:</strong> ${persoon.gewicht} kg</p>
                <hr>
            </div>
        `;
    });

    gegevensDiv.innerHTML = output;
}


laadGegevens();
