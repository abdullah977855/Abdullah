let queryLocation = window.location.search;
console.log(queryLocation);
const urlParam = new URLSearchParams(queryLocation);
console.log(urlParam);
const id = urlParam.get('id');
console.log(id);


const BaseUrl = "https://fakestoreapi.com";

async function apicall() {
    await fetch(`${BaseUrl}/products/${id}`)

        .then(async function (response) {
            const db = await response.json()
            console.log(db)
        })
        .catch(function (e) {
            console.log(e)

        })
}

apicall()