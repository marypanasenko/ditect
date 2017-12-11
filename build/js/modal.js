var modalButtonclose = document.querySelector('.modal-services__button');
var modalRepair = document.querySelector('.modal-services__repair');
var buttonRepair = document.querySelector('.repair');


buttonRepair.addEventListener('click', function() {
    event.preventDefault();
    modalRepair.classList.add("modal-services__repair--show");
});

modalButtonclose.addEventListener('click', function() {
    event.preventDefault();
    modalRepair.classList.remove("modal-services__repair--show");
});
