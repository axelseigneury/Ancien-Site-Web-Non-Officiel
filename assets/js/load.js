// Attendre que le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Récupérer le conteneur du spinner
    var spinnerContainer = document.querySelector(".loading-spinner");
  
    // Afficher le spinner lorsque le contenu de la page est chargé
    spinnerContainer.style.display = "block";
  });
  
  // Attendre que toutes les ressources (y compris les images) soient chargées
  window.addEventListener("load", function() {
    // Récupérer le conteneur du spinner
    var spinnerContainer = document.querySelector(".loading-spinner");
  
    // Masquer le spinner lorsque toutes les ressources sont chargées
    spinnerContainer.style.display = "none";
  });
  