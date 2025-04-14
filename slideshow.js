const slides = [
    {
      imagem: "img/image 3.png",
      texto: "Bolsa artesanal feita à mão com materiais naturais, combinando elegância rústica e design exclusivo. Ideal para quem valoriza autenticidade, sustentabilidade e estilo único em cada detalhe."
    },
    {
      imagem: "img/image 4.png",
      texto: "Bolsa artesanal feita à mão com materiais naturais, combinando elegância rústica e design exclusivo. Ideal para quem valoriza autenticidade, sustentabilidade e estilo único em cada detalhe."
    },
    
  ];
  
  let index = 0;
  
  function mostrarSlide() {
    document.getElementById("slide-img").src = slides[index].imagem;
    document.getElementById("slide-text").textContent = slides[index].texto;
  }
  
  function proximoSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide();
  }
  
  function anteriorSlide() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide();
  }
  