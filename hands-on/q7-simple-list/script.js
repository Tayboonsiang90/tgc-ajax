const API_URL = "https://anapioficeandfire.com/api/books/"

document.querySelector("#load-btn").addEventListener("click", async function() {
    request = await axios.get(API_URL)
    data = request.data
    output = document.querySelector("#output")
    for (let i of data) {
        output.innerHTML += `<li> Book Name: ${i.name} || Book Pages: ${i.numberOfPages}</li>`
    }
})