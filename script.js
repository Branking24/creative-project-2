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
                result = result + "<form class=\"reset-form\"><input id=\"resetSubmit\" type=\"submit\" value=\"Clear\"></input></form>"
                result = result + "<script>document.getElementById(\"resetSubmit\").addEventListener(\"click\", function(event) { document.getElementById(\"img-result\").innerHTML = \"\"; })</script>"
                document.getElementById("img-result").innerHTML = result;
            }
    });
}


document.getElementById("dogSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    doResult(dogEndpoint, "dog");
});

document.getElementById("foxSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    doResult(foxEndpoint, "fox");
});