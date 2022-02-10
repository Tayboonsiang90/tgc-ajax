let url = "https://randomuser.me/api/?results=10"

document.querySelector("#load-btn").addEventListener("click", async function() {
    request = await axios.get(url)
    data = request.data.results
    output = document.querySelector("#output")

    for (i of data) {
        console.log(i.name.first)
        output.innerHTML += `<li>Name: ${i.name.first} ${i.name.last}</li>`
        output.innerHTML += `<li>City: ${i.location.city}</li>`
        output.innerHTML += `<img src ="${i.picture.medium}"></img>`
    }
})

