fetchCatagories(function (catagories) {
    let parentCatagory = $('#parentCategory');
    parentCatagory.empty();
    for (catagory of catagories) {
        console.log(catagory);
        let newOption = `<option value='${catagory.id}'>${catagory.name}</option>`;
        parentCatagory.append(newOption);
    }
});