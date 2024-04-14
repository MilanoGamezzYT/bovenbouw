// Array met de dagen van de week
var dagenVanDeWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

// Functie om de dagen van de week weer te geven
function toonDagen(id, dagen) {
  document.getElementById(id).innerText = dagen.join(", ");
}

// Toon de dagen van de week
toonDagen("alleDagen", dagenVanDeWeek);

// Toon de werkdagen
toonDagen("werkdagen", dagenVanDeWeek.slice(0, 5));

// Toon de weekenddagen
toonDagen("weekenddagen", dagenVanDeWeek.slice(5));

// Toon de dagen van de week in omgekeerde volgorde
toonDagen("omgekeerdeVolgorde", dagenVanDeWeek.slice().reverse());

// Toon de werkdagen in omgekeerde volgorde
toonDagen("omgekeerdeWerkdagen", dagenVanDeWeek.slice(0, 5).reverse());

// Toon de weekenddagen in omgekeerde volgorde
toonDagen("omgekeerdeWeekenddagen", dagenVanDeWeek.slice(5).reverse());
