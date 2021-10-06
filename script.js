$.getJSON("./data/intheater.json", function (data) {
    $.each(data, function (i, data) {
        $('#listmovies').append('<div class="col mb-5"><div class="card shadow border border-dark border-2" style="width: 18rem;"><img src=' + data.posterurl + ' class="card-img-top"><div class="card-body"><h5 class="card-title fw-bold">' + data.title + ' (' + data.year + ')' + '</h5><p class="card-text">' + data.storyline + '</p><div class="collapse" id="collapseExample"><div class="card mb-3" style="width: 15.9rem;"><ul class="list-group list-group-flush"><li class="list-group-item">Release date : ' + data.releaseDate + '</li><li class="list-group-item">Genres : ' + data.genres + '</li><li class="list-group-item">Actors : ' + data.actors + '</li><li class="list-group-item">IMDB rating : ' + data.imdbRating + '</li></ul></div></div><a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">See Details</a></div></div></div></div></div>')
    })
});

$('.dropdown-item').on('click', function () {
    let isiGenre = $(this).html()
    $('#navbarDropdown').html(isiGenre)
    $('#title-genre').html('Film \"' + isiGenre + '\"')
})

$('#allFilm').on('click', function () {
    let allFilm = $(this).html()
    $('#title-genre').html(allFilm)
})

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
})