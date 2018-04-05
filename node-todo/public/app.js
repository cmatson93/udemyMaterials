$(document).ready(function() {
    $.ajax({
            method: "GET",
            url: "/api-todo",
        })
        .done(function(data) {
            for (let i = 0; i < data.length; i++) {
                $("#todoList").append("<ul>" + data[i].name + "</ul>");
            }
        })
    $("#submit-btn").click(function(e) {
        e.preventDefault();
        //Post to do to db
        console.log("clicked");
        console.log($(this).val())
        $.ajax({
            method: "POST",
            url: "/api-todo",
            data: {
                name: $("#todo-input").val()
            }
        }).done(function(data) {
            console.log(data);
            //append data to page
            $("#todoList").append("<ul>" + data.name + "</ul>");
        })
    })
})