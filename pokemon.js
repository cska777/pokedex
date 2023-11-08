// Replac0e ./data.json with your JSON feed

let mama =
    fetch('./pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        for (let i = 0; i < data.pokemon.length; i++) {
            let obj = data.pokemon[i];
            let cardsContainer = document.getElementById("cardsContainer")
            cardsContainer.style.display = "flex"
            cardsContainer.style.flexWrap = "wrap"
            let cards = document.createElement("div")
            cards.setAttribute("class", `card ${obj.type_1}`)
            cards.setAttribute("style", "width: 13rem;")

            let lienPoke = document.createElement("a")
            
            lienPoke.setAttribute("href",`index2.html?${obj.id}`)

            cards.appendChild(lienPoke) 
            

            cards.setAttribute("id", obj.name)

            let image = document.createElement("img")
            image.setAttribute("class", "card-img-top")



            let pokeI = i + 1
            image.src = "./Pokedex/pokemon_illu/" + [pokeI] + ".png"
            image.style.width = "50%"
            image.style.marginTop = "15%"
            image.style.border = "1px solid white"
            image.style.borderRadius = "50%"
            image.style.backgroundColor = "white"


            let id = document.createElement("div")
            id.setAttribute("id", obj.id)
            id.setAttribute("class", "id")
            
            id.textContent = "#" + obj.id
            id.style.textAlign = "center"
            id.style.fontSize = "20px"
            id.style.marginBottom = "10%"
            id.style.backgroundColor = "gray"
            id.style.borderRadius = "30px"



            let nom = document.createElement("div")
            nom.setAttribute("id", obj.name)
            nom.setAttribute("class", "nom")
            nom.textContent = obj.name
            nom.style.textAlign = "center"
            nom.style.fontSize = "20px"
            nom.style.background = "none"


            let divIcone = document.createElement("div")

            divIcone.style.display = "flex"
            divIcone.style.marginBottom = "1%"
            divIcone.style.marginTop = "10%"
            divIcone.style.padding = "20%"
            divIcone.style.justifyContent = "space-around"


            let typeIco1 = document.createElement("img")
            typeIco1.setAttribute("class", "icone i_" + obj.type_1)
            typeIco1.src = "./Pokedex/icons/" + [obj.type_1] + ".svg"


            let typeIco2 = document.createElement("img")
            typeIco2.setAttribute("class", "icone i_" + obj.type_2)
            if (obj.type_2 != "") {
                typeIco2.src = "./Pokedex/icons/" + [obj.type_2] + ".svg"
            }
            else {
                typeIco2.style.display = "none"

            }

            cardsContainer.appendChild(cards)
            cards.appendChild(lienPoke)
            lienPoke.appendChild(image)
            lienPoke.appendChild(id)
            lienPoke.appendChild(nom)
            lienPoke.appendChild(divIcone)
            divIcone.appendChild(typeIco1)
            divIcone.appendChild(typeIco2)

            cards.addEventListener("click",()=>{
                
            })
            
           //---------------------------------------------------------------------
            cards.style.backgroundColor = typeColors[obj.type_1];

            if (obj.type_2) {
                cards.style.background = `linear-gradient(to bottom, ${typeColors[obj.type_1]}, ${typeColors[obj.type_2]})`;
              }
            //-------------------------------------------------------------


            // Ajoutez ceci à la fin de votre code actuel

            let searchValue = document.getElementById("search");
            searchValue.addEventListener("keyup", () => {
                let filter = searchValue.value.toLowerCase(); // Obtenez la valeur de l'input de recherche en minuscules

                // Parcourez les cartes (éléments "cards") pour filtrer en fonction de la valeur de recherche
                let cards = document.getElementsByClassName("card");
                for (let i = 0; i < cards.length; i++) {
                    let card = cards[i];
                    let cardName = card.querySelector(".nom").textContent.toLowerCase(); // Obtenez le nom de la carte en minuscules

                    // Vérifiez si le nom de la carte contient la valeur de recherche
                    if (cardName.includes(filter)) {
                        card.style.display = "block"; // Affichez la carte si elle correspond
                    } else {
                        card.style.display = "none"; // Masquez la carte si elle ne correspond pas
                    }
                }
            });

            


        }



    }).catch(err => {

    });

//MODIF POUR LINEAR GRADIENT CARD - AJOUT LIGNE 100-106 / bg-color css pour chaque type supprimé
const typeColors = {
    normal: 'rgba(236, 236, 227, 0.9)',
    fire: 'rgba(250, 219, 196, 0.9)',
    water: 'rgba(221, 231, 252, 0.9)',
    electric: 'rgba(253, 245, 210, 0.9)',
    grass: 'rgba(226, 243, 217, 0.9)',
    ice: 'rgba(233, 247, 246, 0.9)',
    fighting: 'rgba(242, 191, 190, 0.9)',
    poison: 'rgba(238, 211, 238, 0.9)',
    ground: 'rgba(238, 218, 167, 0.9)',
    flying: 'rgba(213, 200, 249, 0.9)',
    psychic: 'rgba(251, 157, 185, 0.9)',
    bug: 'rgba(223, 236, 123, 0.9)',
    rock: 'rgba(202, 200, 189, 0.9)',
    ghost: 'rgba(145, 120, 177, 0.9)',
    dragon: 'rgba(214, 198, 254, 0.9)',
    dark: 'rgba(174, 145, 126, 0.9)',
    steel: 'rgba(183, 183, 206, 0.9)',
    fairy: 'rgba(243, 220, 232, 0.9)',
};
