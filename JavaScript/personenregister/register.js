// Laad de JSON-gegevens
const persoonData = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
};

// Functie om de gegevens in de DOM te plaatsen
function toonGegevens(data) {
    const gegevensDiv = document.getElementById('gegevens');
    gegevensDiv.innerHTML = `
        <p><strong>Voornaam:</strong> ${data.voornaam}</p>
        <p><strong>Achternaam:</strong> ${data.achternaam}</p>
        <p><strong>Nationaliteit:</strong> ${data.nationaliteit}</p>
        <p><strong>Leeftijd:</strong> ${data.leeftijd}</p>
        <p><strong>Gewicht:</strong> ${data.gewicht} kg</p>
    `;
}

// Roep de functie aan om de gegevens te tonen
toonGegevens(persoonData);
