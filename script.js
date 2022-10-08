let foxEndpoint = "https://randomfox.ca/floof/";
let dogEndpoint = "https://random.dog/woof.json";

function doResult(urlToFetch, type) {
    fetch(urlToFetch)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            let val = "";
            if (type === "dog") {
                val = json.url;
            }
            else if (type === "fox") {
                val = json.image;
            }
            if (type === "dog" && (json.url.includes(".mp4") || json.url.includes(".webm"))) {
                doResult(urlToFetch, type);
            }
            else {
                let result = "<img class=\"result-image\" src=\"" + val + "\"/>";
                result = result + "<form><input id=\"resetSubmit\" type=\"submit\" value=\"Reset\"></input></form>"
                document.getElementById("img-result").innerHTML = result;
            }
    });
}

document.getElementById("codeSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    let foxButton = document.getElementById("fox");
    let dogButton = document.getElementById("dog");
    if (foxButton.checked) {
        doResult(foxEndpoint, "fox");
    }
    else if (dogButton.checked) {
        doResult(dogEndpoint, "dog");
    }
    
});