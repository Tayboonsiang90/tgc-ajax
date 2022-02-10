document.querySelector("#load-users-btn").addEventListener("click", async function(){
        response = await axios.get("users.json")
        data = response.data.users

        allUsers = document.querySelector("#all-users")

        for (i of data) {
            let p = document.createElement("p")
            p.innerText = `User ID = ${i.userId}
            First Name = ${i.firstName}
            Last Name = ${i.lastName}
            Phone Number = ${i.phoneNumber}
            Email Address = ${i.emailAddress}`
            allUsers.appendChild(p)
        }
})

