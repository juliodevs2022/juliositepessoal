const modalOverlay = documento. querySelector('.modal-overlay');
const cards = documento. querySelectorAll('.card');

para (deixe cartão de cartões) {
    cartão. addEventListener("clique", função() {
        const videoId = cartão. getAttribute("id");
        modalOverlay. classList. add('ativo');
        modalOverlay. querySelector("iframe"). src = 'https://www.youtube.com/embed/${videoId}';
    })
}

documento. querySelector(".close-modal"). addEventListener("clique", função() {
    modalOverlay. classList. remove("ativo");
    modalOverlay. querySelector("iframe"). Src = "";
})
