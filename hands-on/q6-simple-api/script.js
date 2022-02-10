let url = "https://programming-quotes-api.herokuapp.com/quotes/random"

document.querySelector("button").addEventListener("click", async function() {
    response = await axios.get(url)
    document.querySelector("#quote").innerHTML = response.data.en
    
})

