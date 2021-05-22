

//sélection de tous les éléments requis
const filterItem = document.querySelector(".filter-items");
const filterImg = document.querySelectorAll(".galerie .image");

// Une fois la fenêtre loadée:
window.onload = () => {
    // Lorsque l'user clique sur la div filterItem
    filterItem.onclick = (selectedItem) => {

        // lorsque l'user clique sur une catégorie (item)
        if (selectedItem.target.classList.contains("item")) {
            // la classe active est enlevée de l'item initial
            filterItem.querySelector(".active").classList.remove("active");
            //et ajoutée à l'item sélectionné
            selectedItem.target.classList.add("active");

            // la valeur du data-name selectionné par l'user est attribué à une variable filtername
            let filterName = selectedItem.target.getAttribute("data-name");

            filterImg.forEach((image) => {
                //récupère les images avec la même valeur data-name
                let filterImges = image.getAttribute("data-name");

                //si la data-name de l'item est égale à la data-name des images (ex: si le filtre Spring correspond aux images Spring)
                if ((filterImges == filterName)) {
                    image.classList.remove("hide"); //enlève la class "hide" de l'image
                    image.classList.add("show"); //ajoute la class "show" de l'image
                } else {
                    image.classList.add("hide"); //ajoute la class "hide" de l'image
                    image.classList.remove("show"); //enlève la class "show" de l'image
                }
            });
        }
    }
    
    for (let i = 0; i < filterImg.length; i++) {
        //ajoute l'attribut onclick à toutes les images
        filterImg[i].setAttribute("onclick", "preview(this)");
    }
}


//Fonction lightbox
//sélection de tous les éléments requis
const previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    shadow = document.querySelector(".shadow");

function preview(element) {
    //le lien source de l'image cliqué est stocké une variable
    let selectedPrevImg = element.querySelector("img").src;

    //l'image cliquée est affichée dans la lightbox (previewimg renvoie à previewbox, qui renvoie à la div ".preview-box")
    previewImg.src = selectedPrevImg;

    //affiche la preview-box
    previewBox.classList.add("show");

    //lorsque l'user clique sur l'icône X de la lightbox
    closeIcon.onclick = () => {
        //la lightbox est cachée
        previewBox.classList.remove("show");
        //la barre de scroll est affichée
        document.querySelector("body").style.overflow = "auto";
    }
}

//fonction qui permet de réafficher la galerie en entier lorsqu'on clique sur 'Lookbooks'
document.getElementById("lookbooks").onclick = function refreshPage() {
    window.location.reload();
}