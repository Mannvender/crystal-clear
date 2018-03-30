function fetchCatagories(done) {
    $.get('http://localhost:2222/api/catagory', function (data) {
        done(data)
    })
}

function fetchPosts(parentCategory, done) {
    $.get('http://localhost:2222/api/posts/specific?CatagoryID=' + parentCategory, function (data) {
        done(data)
    })
}

function createCatagory(catagory) {
    return (`
    <div class="card col-12 col col-md-4 col-sm-5" style="margin: 5px">
            <img class="card-img-top" src="./img/${catagory.name}.jpg" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${catagory.name}</h4>
                <p class="card-text">${catagory.description}</p>
                <a href="./posts.html?id=${catagory.id}" class="btn btn-info" role="button">Show More</a>
            </div>
        </div>
    `)
}

function createPosts(postData) {
    return (`
    <div class="card m-3">
            <div class="card-header">${postData.name}</div>
            <img src="#" class="card-img">
            <div class="card-body">
                <p>${postData.content}</p>
            </div>
        </div>
    `)
}

function addEntry(name, desc, done) {
    $.post('/api/entries', {
        name: name,
        descriptionText: desc
    }, function (data) {
        done(data)
    })
}