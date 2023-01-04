const options = {
    method: 'GET',

};

fetch('https://rickandmortyapi.com/api/character', options)
    .then(data => data.json())
    .then(data => {
        //console.log(data)
        const arrayData = data.results
        arrayData.map((element) => {
            //console.log(element)
            const name = element.name
            const species = element.species
            const status = element.status
            const image = element.image

            const target = `
            <div>
            <img src="${image}"/>
            <h2>${name}<h2>
             <h3>${species}<h3>
              <h3>${status}<h3>
            </div> `

            document.getElementById('container').innerHTML += target



        })


    })
    .catch(err => console.error(err));




