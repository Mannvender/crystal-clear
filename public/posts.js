(function () {
    // vars will pick up userId from query
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });

    $(function () {
        let postConstainer = $('#postContainer');
        postConstainer.empty();
        fetchPosts(vars.id, function (posts) {

            for (post of posts.rows) {
                postConstainer.append(createPosts(post));
            }
        })
    });


})();



