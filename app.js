document.getElementById('fetch').addEventListener('click', bestSellers);

function bestSellers() {
    fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=trade-fiction-paperback&api-key=gHV6Kht1gyYAI1ZGSJoRyP0146KA3AY3', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(response => console.log(response))
};

    