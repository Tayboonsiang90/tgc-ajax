// document.querySelector("#load-btn").addEventListener("click", function () {
//     axios.get('contact.txt').then(function (response) {
//         let article = response.data;
//         document.querySelector("#content").innerHTML = article;
//     })
// })

document.querySelector("#load-btn").addEventListener("click", async function () {
    response = await axios.get('contact.txt')
    let article = response.data;
    document.querySelector("#content").innerHTML = article;
})


