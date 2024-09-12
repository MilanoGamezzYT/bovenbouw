def welkom():
    print("Welkom bij Papi Gelato je mag alle smaken kiezen zolang het maar vanille ijs is.")

def vraag_hoeveelheid():
    while True:
        bolletjes = input("Hoeveel bolletjes wilt u? ")
        if bolletjes.isdigit():
            bolletjes = int(bolletjes)
            if 1 <= bolletjes <= 3:
                return bolletjes
            elif 4 <= bolletjes <= 8:
                print(f"Dan krijgt u van mij een bakje met {bolletjes} bolletjes")
                return bolletjes
            else:
                print("Sorry, zulke grote bakken hebben we momenteel niet")
        else:
            print("Sorry dat snap ik niet...")

def vraag_hoorntje_bakje(bolletjes):
    if 1 <= bolletjes <= 3:
        while True:
            keuze = input(f"Wilt u deze {bolletjes} bolletje(s) in een hoorntje of in een bakje? ")
            if keuze.lower() in ["hoorntje", "bakje"]:
                return keuze
            else:
                print("Sorry, dat snap ik niet...")
    else:
        return "bakje" 

def serveer_ijs(bolletjes, keuze):
    print(f"Hier is uw {keuze} met {bolletjes} bolletje(s).")
    while True:
        antwoord = input("Wilt u nog meer bestellen? ")
        if antwoord.lower() == "ja":
            return True
        elif antwoord.lower() == "nee":
            print("Bedankt en tot ziens!")
            return False
        else:
            print("sorry, dat snap ik niet")
            print("")
            
