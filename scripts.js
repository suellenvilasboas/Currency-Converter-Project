const button = document.getElementById("converter-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.000011

const convertValues = () => {
    const input = document.getElementById("input-value").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input)

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input / euro)
    }

    if (select.value === "Ƀ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT",
            minimumFractionDigits: 8,
        }).format(input * bitcoin)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./Assets/icons8-united-states-48.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/icons8-banco-central-europeu-48.png"
    }

    if (select.value === "Ƀ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/icons8-bitcoin-48.png"
    }
    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
