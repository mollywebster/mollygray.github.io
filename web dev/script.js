function prompt() {
           
    var doc = prompt("Please enter some text",
        "Molly's store");
   
    if (doc != null) {
        document.getElementById("g").innerHTML =
            "Welcome to " + doc;
    }
}