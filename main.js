$(document).ready(function () {

    // .click() functionality
    $(".click button").click(function () {
        alert("You clicked me!");
    });

    // .hide() functionality
    $(".hide button").click(function () {
        $(".hide p").hide("slow");
    });

    // .show functionality
    $(".show button").click(function () {
        $(".show p").show("slow");
    });

    // .toggle functionality
    $(".toggle button").click(function () {
        $(".toggle p").toggle("slow");
    });

    // .slideDown functionality
    $(".slide-down button").click(function () {
        $(".slide-down img").slideDown("slow");
    });

    // .slideUp functionality
    $(".slide-up button").click(function () {
        $(".slide-up img").slideUp("slow");
    });

    // .fadeIn functionality
    $(".fade-in button").click(function () {
        $(".fade-in p").fadeIn("slow");
    });

    // .fadeOut functionality
    $(".fade-out button").click(function () {
        $(".fade-out img").fadeOut("slow");
    });

    // .addClass functionality
    $(".add-class button").click(function () {
        $(".add-class p").addClass("blue");
    });

    // .before functionality
    $(".before button").click(function () {
        $(".before p").before("<b>India</b>");
    });

    // .after functionality
    $(".after button").click(function () {
        $(".after p").after("<i>Harshada</i>");
    });

    // .append functionality
    $(".append button").click(function () {
        $(".append p").append("<strong> –Albert Einstein</strong>");
    });

    // .html functionality
    $(".html button").click(function () {
        $(".html").html("<h3>You miss 100% of the shots you don’t take. –Wayne Gretzky</h3>");
    });

    // .attr functionality DO THIS
    $(".attr button").click(function () {
        $(".attr p").attr("<strong> –Albert Einstein</strong>");
    });

    // .val functionality
    $(".val button").click(function () {
        $(".val input").val("Enter location");
    });

    // .text functionality
    $(".text button").click(function () {
        $(".text span").text("an awful");
    });

    // .data functionality DO THIS
    $(".data button").click(function () {
        $(".data span").data("an awful");
    });

});
