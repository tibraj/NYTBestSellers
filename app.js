document.getElementById('fetch').addEventListener('click', bestSellers);

function bestSellers() {
    fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=trade-fiction-paperback&api-key=gHV6Kht1gyYAI1ZGSJoRyP0146KA3AY3', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        const books = data.results.map(elm => {
            console.log(elm);
            return elm
            
        })
        const book_details = books.map(elm => {
            console.log(elm.book_details);
            return elm.book_details
        })
        const titles = book_details.map(elm => {
          console.log(elm[0].title, elm[0].author, elm[0].description, elm[0].primary_isbn13, elm[0].publisher);
          return elm[0].title, elm[0].author, elm[0].description, elm[0].primary_isbn13, elm[0].publisher;
        })
        const amazon_links = books.map(elm => {
            console.log(elm.amazon_product_url);
            return elm.amazon_product_url;
        })
        const reviews = books.map(elm => {
            elm.reviews.map(book_review => {
                console.log(book_review.book_review_link);
                return book_review.book_review_link
            })
        })
        const rank = books.map(elm => {
            console.log(elm.rank, elm.rank_last_week, elm.weeks_on_list);
            return elm.rank, elm.rank_last_week, elm.weeks_on_list;
        })
    });
};

    