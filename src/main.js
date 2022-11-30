
function encurtarUrl() {

    let url = document.getElementById('input-url').value

    if(!url) {
        alert("Coloque uma URL válida")
        return
    }

    //api key: 9a2039c0b2de4e69b3a3a78c369f03f3

    let headers = {
        "Content-type": "application/json",
        "apiKey": "9a2039c0b2de4e69b3a3a78c369f03f3"
    }

    let linkRequest = {
        destination: url,
        domain: {fullName: "rebrand.ly"}
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    }) 
        .then(response => response.json())
        .then(json => {
            console.log(json)
            
            let inputUrl = document.getElementById('input-url')
            inputUrl.value = json.shortUrl
        })
}

function copiar() {
    let inputUrl = document.getElementById('input-url')

    inputUrl.select()
    inputUrl.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(inputUrl.value)

    alert(`URL copiada: ${inputUrl.value}`)
}
