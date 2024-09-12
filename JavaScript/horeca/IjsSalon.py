from isfunctions import welkom, vraag_hoeveelheid, vraag_hoorntje_bakje, serveer_ijs

welkom()
while True:
    bolletjes = vraag_hoeveelheid()
    keuze = vraag_hoorntje_bakje(bolletjes)
    if not serveer_ijs(bolletjes, keuze):
        break
    