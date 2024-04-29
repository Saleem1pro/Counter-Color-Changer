// index.js
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("changeColorButton");
    button.addEventListener("click", changerCouleurBody);

    function changerCouleurBody() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var couleur = "rgb(" + r + ", " + g + ", " + b + ")";
        document.body.style.backgroundColor = couleur;
    }
});
