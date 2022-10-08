let foxEndpoint = "https://randomfox.ca/floof/";
let dogEndpoint = "https://random.dog/woof.json";

function doResult(urlToFetch) {
    fetch(urlToFetch)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            if (json.url.includes(".mp4")) {
                doResult(urlToFetch);
            }
            else {
            let result = "<img class=\"fox-image\" src=\"" + json.url + "\"/>";
            result = result + "<form><input id=\"resetSubmit\" type=\"submit\" value=\"Reset\"></input></form>"
            document.getElementById("img-result").innerHTML = result;
            }
    });
}

document.getElementById("codeSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    
    doResult(dogEndpoint);
});