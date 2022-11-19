const form = document.querySelector("#searchForm")
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const input = form.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
    addImages(res.data)
})

function addImages(shows) {
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement("IMG")
            img.src = show.show.image.medium
            document.body.append(img)
        }
    }
}