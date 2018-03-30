$(function () {
    let entryName = $('#entryName');
    let descriptionText = $('#descriptionText');

    $('#btnEntryAdd').click(function () {

        addEntry(
            entryName.val(),
            descriptionText.val(),
            function (addedEntry) {
                window.alert("added " + addedEntry.name + " to database")
            }
        )
    })

});