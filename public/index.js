$(function () {
    let row1 = $('#row1')
    let row2 = $('#row2')
    fetchEntries(function (entries) {
        row1.empty();
        row2.empty();
        for (entry of entries) {
            row1.append(createEntry(entry))
        }
    })

})

