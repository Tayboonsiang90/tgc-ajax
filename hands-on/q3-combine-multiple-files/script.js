document.querySelector("#load-btn").addEventListener("click", async function () {
    response1 = await axios.get("file1.txt")
    data1 = response1.data
    p1 = document.createElement("p")
    p1.innerText = data1

    response2 = await axios.get("file2.txt")
    data2 = response2.data
    p2 = document.createElement("p")
    p2.innerText = data2

    content = document.querySelector("#content")
    content.appendChild(p1)
    content.appendChild(p2)
})


