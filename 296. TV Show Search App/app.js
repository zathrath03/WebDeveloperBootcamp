const form = document.querySelector("#searchForm")
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const input = form.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
    console.log(res)
})