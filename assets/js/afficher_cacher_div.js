function afficher_cacher(id_element) {
    var texteElement = document.getElementById(id_element);
    var boutonTexte = document.getElementById('bouton_' + id_element);
  
    if (texteElement.style.visibility === 'hidden') {
      texteElement.style.visibility = 'visible';
      boutonTexte.innerText = 'Cacher le texte';
    } else {
      texteElement.style.visibility = 'hidden';
      boutonTexte.innerText = 'Afficher le texte';
    }
  
    ajusterHauteur(id_element);
  }
  
  function ajusterHauteur(id_element) {
    var texteElement = document.getElementById(id_element);
    var parentElement = texteElement.parentNode;
    
    // Réinitialiser la hauteur pour obtenir la hauteur naturelle du texte
    texteElement.style.height = 'auto';
    
    // Récupérer la hauteur naturelle du texte
    var hauteurTexte = texteElement.offsetHeight;
    
    // Appliquer la hauteur au parent (boîte)
    parentElement.style.height = hauteurTexte + 'px';
  }
  