document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var password = document.getElementById("password").value;

    
    if (password === "to be or not to be") {
        
        window.location.href = "https://www.youtube.com/watch?v=QpWr6mFCsso";
    } else {
        alert("Maybe its best you dont go here");
        document.getElementById("password").value = ""; 
    }
});

