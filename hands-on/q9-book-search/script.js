let url = "http://openlibrary.org/search.json?title="

document.querySelector("#btn").addEventListener("click", async function() {
    search = document.querySelector("#search").value
    request = await axios.get(url + search)
    data = request.data.docs

    output = document.querySelector("#output")

    output.innerHTML = `<li> Title.${data[0].title} </li>
    <li> Author Name: ${data[0].author_name} </li>`
})