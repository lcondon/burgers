$("#burgerBtn").on('click', function (event) {
    event.preventDefault();
    var burgerItem = {
        burgerName: $("#burgerInput").val().trim(),
        devoured: false
    }

    $("#burgerInput").val("");



    $.post('/api/new', burgerItem).then(function (data) {
        console.log(data);
        var listItem = $('<li>').addClass("list-group-item d-flex justify-content-between align-items-center")
            .html(burgerItem.burgerName + `<button class="btn btn-danger devourBtn" flavor="${data}">Devour</button>`)
            .attr('id', data);
        $('#notEaten').append(listItem);

        $(".devourBtn").click(function () {
            var id = "#" + $(this).attr('flavor');
            var burger = $(this).attr('flavor');
            var btn = $(this);
            console.log(id)

            $.post('/api/eaten', burger).then(function (data) {
                $(id).appendTo('#eaten');
                btn.remove();
            })
        })
    })
})

$(".devourBtn").on('click', function () {
    var id = "#" + $(this).attr('flavor');
    var burger = {route: $(this).attr('flavor')};
    var btn = $(this);
    console.log(id)

    $.post('/api/eaten', burger).then(function (data) {
        $(id).appendTo('#eaten');
        btn.remove();
    })
});