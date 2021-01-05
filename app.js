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
        let output = '';
        const titles = book_details.map(elm => {
          output += `
                <ul>
                    <li><h3>Title: ${elm[0].title}</h3>
                        <h3>Author: ${elm[0].author}</h3>
                        <h3>Description:${elm[0].description}</h3>
                        <h3>ISBN:${elm[0].primary_isbn13}</h3>
                        <h3>Publisher:${elm[0].publisher}</h3></li>
                </ul>
          `
          console.log(elm[0].title, elm[0].author, elm[0].description, elm[0].primary_isbn13, elm[0].publisher);
          document.getElementById('titles').innerHTML = output;
          return elm[0].title, elm[0].author, elm[0].description, elm[0].primary_isbn13, elm[0].publisher;
        })
        let output2 = '';
        const amazon_links = books.map(elm => {
            output2 += `
                <ul>
                    <li><h3>Amazon Link: ${elm.amazon_product_url}</h3></li>
                </ul>
            `
            console.log(elm.amazon_product_url);
            document.getElementById('amazon_links').innerHTML = output2;
            return elm.amazon_product_url;
        })
        let output3 = '';
        const reviews = books.map(elm => {
            elm.reviews.map(book_review => {
                output3 += `
                <ul>
                    <li><h3>NYT Review: ${book_review.book_review_link !== "" ? book_review.book_review_link : "A review has not been written for this title."}</h3></li>
                </ul>
                `
                console.log(book_review.book_review_link);
                document.getElementById('reviews').innerHTML = output3;
                return book_review.book_review_link
            })
        })
        let output4 = '';
        const rank = books.map(elm => {
            output4 += `
                <ul>
                    <li><h3>Rank: ${elm.rank}</h3>
                        <h3>Previous Rank: ${elm.rank_last_week}</h3>
                        <h3>Weeks Spent on List: ${elm.weeks_on_list}</h3>
                </ul>
          `
            console.log(elm.rank, elm.rank_last_week, elm.weeks_on_list);
            document.getElementById('rank').innerHTML = output4;
            return elm.rank, elm.rank_last_week, elm.weeks_on_list;
        })
    });
};

// function outputData() {
//     bestSellers();
//     let output = '';
// }

    