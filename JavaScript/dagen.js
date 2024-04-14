// Array met de dagen van de week
var dagenVanDeWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

function toonDagen(id, dagen) {
  document.getElementById(id).innerText = dagen.join(", ");
}

toonDagen("alleDagen", dagenVanDeWeek);

toonDagen("werkdagen", dagenVanDeWeek.slice(0, 5));

toonDagen("weekenddagen", dagenVanDeWeek.slice(5));

toonDagen("omgekeerdeVolgorde", dagenVanDeWeek.slice().reverse());

toonDagen("omgekeerdeWerkdagen", dagenVanDeWeek.slice(0, 5).reverse());

toonDagen("omgekeerdeWeekenddagen", dagenVanDeWeek.slice(5).reverse());
