function welkom() {
    console.log("Welkom bij Papi Gelato, je mag alle smaken kiezen zolang het maar vanille-ijs is.");
    alert("Welkom bij Papi Gelato, je mag alle smaken kiezen zolang het maar vanille-ijs is.");
}

function vraagHoeveelheid() {
    while (true) {
        let bolletjes = prompt("Hoeveel bolletjes wilt u?");
        if (!isNaN(bolletjes)) {
            bolletjes = parseInt(bolletjes);
            if (bolletjes >= 1 && bolletjes <= 3) {
                return bolletjes;
            } else if (bolletjes >= 4 && bolletjes <= 8) {
                alert(`Dan krijgt u van mij een bakje met ${bolletjes} bolletjes.`);
                return bolletjes;
            } else {
                alert("Sorry, zulke grote bakken hebben we momenteel niet.");
            }
        } else {
            alert("Sorry dat snap ik niet...");
        }
    }
}

function vraagHoorntjeBakje(bolletjes) {
    if (bolletjes >= 1 && bolletjes <= 3) {
        while (true) {
            let keuze = prompt(`Wilt u deze ${bolletjes} bolletje(s) in een hoorntje of in een bakje?`);
            if (keuze.toLowerCase() === "hoorntje" || keuze.toLowerCase() === "bakje") {
                return keuze;
            } else {
                alert("Sorry, dat snap ik niet...");
            }
        }
    } else {
        return "bakje";
    }
}

function serveerIjs(bolletjes, keuze) {
    alert(`Hier is uw ${keuze} met ${bolletjes} bolletje(s).`);
    while (true) {
        let antwoord = prompt("Wilt u nog meer bestellen? (ja/nee)");
        if (antwoord.toLowerCase() === "ja") {
            return true;
        } else if (antwoord.toLowerCase() === "nee") {
            alert("Bedankt en tot ziens!");
            return false;
        } else {
            alert("Sorry, dat snap ik niet...");
        }
    }
}

function startPapiGelato() {
    welkom();
    while (true) {
        let bolletjes = vraagHoeveelheid();
        let keuze = vraagHoorntjeBakje(bolletjes);
        if (!serveerIjs(bolletjes, keuze)) {
            break;
        }
    }
}
