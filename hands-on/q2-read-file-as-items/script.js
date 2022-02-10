main = async function () {
    let response = await axios.get('items.txt')
    array = response.data.split(",")
}

main()