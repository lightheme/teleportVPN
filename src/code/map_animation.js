const servers_available = [
    "RU",
    "US",
    "GB",
    "BR",
    "CA",
    "NZ",
    "FI",
    "MG",
    "GL",
    "DE",
    "KZ",
    "TR",
    "CN",
    "HK",
    "AR"
];

const countryName = document.getElementById("country-name");

function teletype(text) {
    function startTyping(index = 0) {
        if (index >= text.length) {
            return setTimeout(()=>{
                untype()
            }, 1500);
        }
        countryName.textContent = countryName.textContent + text[index];

        setTimeout(startTyping.bind(this, index+1), 70);
    }

    startTyping();
}

function untype() {
    function startTyping(index) {
        if (index <= 0) return;
        countryName.textContent = countryName.textContent.slice(0, -1);

        setTimeout(startTyping.bind(this, index-1), 70);
    }

    startTyping(countryName.textContent.length);
}

function servers_choosing(index) {
    if (index >= servers_available.length) {index=0;}
    if (index !== 0) {
        document.getElementById(servers_available[index-1]).classList.remove("path_chosen");
    } else {
        document.getElementById(servers_available[servers_available.length-1]).classList.remove("path_chosen");
    }
    document.getElementById(servers_available[index]).classList.add("path_chosen");
    const text = document.getElementById(servers_available[index]).getAttribute("title")
    teletype(text);

    setTimeout(function (){servers_choosing(index+1);}, 2*(text.length)*70+2100);
}

servers_choosing(0);