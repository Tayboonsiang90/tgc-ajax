document
  .querySelector("#load-users-btn")
  .addEventListener("click", async function () {
    response = await axios.get("users.json");
    data = response.data.users;

    allUsers = document.querySelector("#all-users");

    for (i of data) {
      let p = document.createElement("p");
      p.innerHTML = `
            <li> First Name = ${i.firstName}
            Last Name = ${i.lastName}
            Email Address = ${i.emailAddress} </li>`;
      allUsers.appendChild(p);
    }
  });

document.querySelector("#search-btn").addEventListener("click", async function () {
    response = await axios.get("users.json");
    data = response.data.users;

    allUsers = document.querySelector("#all-users");
    search = document.querySelector("#search").value;

    for (i of data) {
      if (i.userId == search) {
        let p = document.createElement("p");
        p.innerHTML = `
        <li> First Name = ${i.firstName}
        Last Name = ${i.lastName}</li>`;
        allUsers.appendChild(p);
      }
    }
  });
