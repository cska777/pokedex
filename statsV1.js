// Replac0e ./data.json with your JSON feed
let query = window.location.search.substring(1);


let mama =
    fetch('./pokemon.json').then(response => {
        return response.json();
    }).then(data => {

        for (let i = 0; i < data.pokemon.length; i++) {
            let obj = data.pokemon[i]
   

            let image = document.createElement("img")

           


            let pokeI = i + 1
            image.src = "./Pokedex/pokemon_illu/" + [pokeI] + ".png"
            image.style.width = "100px"
            

            let queryInt = parseInt(query)
            


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
            typeIco1.style.backgroundColor = "black"

            let typeIco2 = document.createElement("img")
            typeIco2.setAttribute("class", "icone i_" + obj.type_2)
            typeIco2.src = "./Pokedex/icons/" + [obj.type_2] + ".svg"
            typeIco2.style.backgroundColor = "black"



            if(pokeI == queryInt){
                let containerStats = document.getElementById("containerstat")
                let profileLeft = document.getElementById("profileLeft")
                containerStats.appendChild(profileLeft)
                profileLeft.appendChild(image)
            }
           
            //Créer un lien entre deux tableaus .json et .js

            fetch('./script.json').then(response => {
                return response.json();
            }).then(data => {
                 if(data.table[i].id == query){
                    console.log(data.table[i])
                 }
            })

            //_________graphique____________________


        }


    }).catch(err => {

    });

    let barCanvas = document.getElementById("barCanvas").getContext('2d');
    let labels = ["hp", "attaque", "defense"];
    let colors = ["crimson", "lightgreen", "violet"];

            let barChart = new Chart(barCanvas,{
                type: 'doughnut',
                data: {
                    datasets: [{
                        data:[169,128,60],
                        backgroundColor: colors,
                        cutout: '30%',
                        hoverOffset: 40
                    }],

                    labels: labels
                    },
                    options: {
                        layout:{
                            padding: 40,
                        },
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend:{
                                position: 'bottom',
                            },
                        }

                    
                    }
               
            })

