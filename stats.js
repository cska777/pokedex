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
            image.alt = "Illustration de " + [obj.name]
            image.style.width = "300px"
            
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

            fetch('./script.json').then(response => {
                return response.json();
            }).then(data => {
                 if(data.table[i].id == query){
                    console.log(data.table[i])

                    let barCanvas = document.getElementById("barCanvas").getContext('2d');
                    let labels = [`Hp`, "Attack", "Defense"];
                    let colors = ['#F2BFBE', '#EEDAA7', '#D6C6FE'];

                    let barChart = new Chart(barCanvas,{
                        type: 'doughnut',
                        data: {
                            labels: labels,
                            datasets: [{
                                data:[data.table[i].hp, data.table[i].attack, data.table[i].defense],
                                backgroundColor: colors,
                                cutout: '30%',
                                hoverOffset: 40
                            }],
                            },
                            options: {
                                layout:{
                                    padding: 20,
                                },
                                plugins: {
                                    legend:{
                                        position: 'bottom',
                                        labels:{
                                            padding:28,
                                            font:{
                                                size: 12,
                                                weight: 'bold',
                                                }
                                            },
                                        },
                                    },
                                }
                            })       

                    if(pokeI == queryInt){
                        let containerStats = document.getElementById("containerstat")
                        let divIllu = document.getElementById("div-illu")
                        let divStats = document.getElementById("div-stats")
                        let figure = document.createElement("figure")
                        let figcaption = document.createElement("figcaption")
                        figcaption.textContent = `${obj.id} - ${obj.name}`
                        figcaption.style.textAlign = "center"
                        figcaption.style.fontSize = "30px"
                        figcaption.style.textTransform = "capitalize"


                        let typeLign = document.createElement("p")
                        typeLign.innerHTML = `<span class="type-label">Type :</span><br> ${obj.type_1} ${obj.type_2}`
                        typeLign.style.fontSize = "25px"
                        typeLign.style.textTransform = "capitalize"
                        
              
                        containerStats.appendChild(figure)
                        figure.appendChild(image)
                        figure.appendChild(figcaption)
                        containerStats.appendChild(divIllu)
                        divIllu.appendChild(figure)
                        divStats.appendChild(typeLign)
        
                    }
                 }
            })

           }

    }).catch(err => {

    });

   

