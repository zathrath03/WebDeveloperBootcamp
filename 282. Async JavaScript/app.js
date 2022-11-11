async function fake_fetch_data(url) {
    const TIMEOUT = 4000
    const random_time_delay = Math.random() * 4500 + 500
    console.log(random_time_delay)
    if (random_time_delay < TIMEOUT) {
        return `Fake data from ${url}`
    }
    throw "Response timeout exceeded"
}

async function calltwice() {
    try {
        console.log(await fake_fetch_data("/api"))
        console.log(await fake_fetch_data("/login"))
    } catch (e) {
        console.log(e)
    }
}

calltwice()