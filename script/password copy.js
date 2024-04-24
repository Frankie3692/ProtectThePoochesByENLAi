document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var password = document.getElementById("password").value;

    
    if (password === "everywhere and nowhere") {
        
        window.location.href = "https://www.youtube.com/watch?v=O5PsUQLDBVs";
    } else {
        alert("Maybe its best you dont go here");
        document.getElementById("password").value = ""; 
    }
});


