const controller = new NegocioacaoController();

document
.querySelector('.form')
.addEventListener('submit', controller.Adicionar.bind(controller));
