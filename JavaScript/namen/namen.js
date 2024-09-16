var aantalNamen = parseInt(prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)"));

if (isNaN(aantalNamen) || aantalNamen < 3) {
  alert("Ongeldig aantal namen. Voer minimaal 3 namen in.");
} else {
  var namen = [];

  for (var i = 0; i < aantalNamen; i++) {
    var naam = prompt("Voer naam " + (i + 1) + " in:");
    namen.push(naam);
  }

  function toonNamen(id, namen) {
    document.getElementById(id).innerText = namen.join(", ");
  }

  toonNamen("ingevoerdeNamen", namen);

  toonNamen("omgekeerdeVolgorde", namen.slice().reverse());
}