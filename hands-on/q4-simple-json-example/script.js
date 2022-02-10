document.querySelector("#load-image-btn").addEventListener("click", function () {
    axios.get("artwork.json").then(function (response) {
        data = response.data
        payload = `<img title="${data.title}" class="${data.class}" src="${data.image_url}"></img>`
        document.querySelector("#image").innerHTML = payload
    })
})
