let h = document.querySelectorAll("a")
// getElementsByTagName("a"); // h - kolleksiya

for(let i = 0; i<=h.length; i++) {
    // console.log(h[i].getAttribute(["href"]))
    if (h[i].getAttribute("href") == "#") {
        h[i].style.color = "red";
    }
}