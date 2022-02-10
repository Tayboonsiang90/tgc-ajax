document.querySelector('#load-btn').addEventListener("click", async function () {
    let response = await axios.get('items.txt')
    array = response.data.split(",")

    for (i of array) {
        list = document.querySelector("#list")
        list.innerHTML += `<li>${i}</li>`
    }
})
