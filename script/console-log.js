
var currentPage = window.location.pathname;


if (currentPage === "aboutTheOwner.html") {
    console.log("This is page 1");
} else if (currentPage === "bait.html") {
    console.log("This is page 2");
} else if (currentPage === "history.html") {
    console.log("This is page 3");
} else {
    console.log("Unknown page");
}