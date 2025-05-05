document.getElementById('preto-e-branco').addEventListener
('click', function()
{
    document.body.classList.toggle('preto-e-branco');
}
);


window.onload = function() {
    var corpoDaPagina = document.querySelector('body');
    var aumentarTexto = document.getElementById('aumentar-texto');
    var diminuirTexto = document.getElementById('diminuir-texto');

    var fontSize = 100;
    var qntAumentarDiminuir = 10;

    aumentarTexto.addEventListener('click', function(event) {
        fontSize += qntAumentarDiminuir;
        corpoDaPagina.style.fontSize = fontSize + '%';
    });

    diminuirTexto.addEventListener('click', function(event) {
        fontSize -= qntAumentarDiminuir;
        corpoDaPagina.style.fontSize = fontSize + '%';
    });
};


document.getElementById('alto-contraste').addEventListener
('click', function()
{
document.body.classList.toggle('alto-contraste');
}
);

