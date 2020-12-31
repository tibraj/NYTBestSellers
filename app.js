document.getElementById('fetch').addEventListener('click', bestSellers);

function bestSellers() {
    fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=trade-fiction-paperback&api-key=gHV6Kht1gyYAI1ZGSJoRyP0146KA3AY3', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        const books = data.results.map(elm => {
            return elm
        })
        const book_details = books.map(elm => {
            return elm.book_details
        })
        const titles = book_details.map(elm => {
            console.log(elm[0].title, elm[0].author, elm[0].description, elm[0].primary_isbn13, elm[0].publisher);
        })
    });
};

    