function bestSellers() {
    fetch("https://api.nytimes.com/svc/books/v3/lists.json")
    .then(response => response.json())
    .then(console.log(response))
};
