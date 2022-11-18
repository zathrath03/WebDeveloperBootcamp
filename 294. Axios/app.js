const URL = "https://swapi.dev/api/starships/"

// axios.get(url)
//     .then(res => {
//         console.log("RESPONSE: ", res.data.name)
//     }).catch((e) => {
//         console.log("ERROR! ", e)
//     })

async function getStarWarsShipName(id) {
    try {
        url = `${URL}${id}/`
        const res = await axios.get(url)
        console.log(res.data.name)
    } catch (error) {
        console.error(error)
    }
}

getStarWarsShipName(9)