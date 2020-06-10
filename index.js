document.addEventListener('DOMContentLoaded', function(){
    axios.get('http://beer-me-python-backend.herokuapp.com/beers').then(function(result){
        console.log(result);

    let beerImg = result.data[0].beer_label

    let beer = document.createElement('img')

    beer.src = beerImg

    document.body.appendChild(beer)


    });
})