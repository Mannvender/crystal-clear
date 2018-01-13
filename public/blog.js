function fetchEntries(done) {
    $.get('/api/entries', function (data) {
        done(data)
    })
}

function createEntry(entry) {
    return (`
    <div class="card col-12 col col-md-4 col-sm-5" style="margin: 5px">
            <img class="card-img-top" src="./img/${entry.name}.jpg" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${entry.name}</h4>
                <p class="card-text">${entry.descriptionText}</p>
                <button class="btn btn-primary btnColor" type="button" data-toggle="collapse"
                        data-target="#collapseExample${entry.id}" aria-expanded="false" aria-controls="collapseExample">
                    tell me bout it
                </button>

                <div class="collapse" id="collapseExample${entry.id}">
                    <div class="" style="margin-top: 15px">
                        my favourite ${entry.name} thing
                        <div class="list-group">
                            <a href="#collapseExample${entry.id}"
                               class="list-group-item list-group-item-action list-group-item-success">Starbucks</a>
                            <a href="#collapseExample${entry.id}"
                               class="list-group-item list-group-item-action list-group-item-info">Tim
                                Hortons</a>
                        </div>
                    </div>
                </div>
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