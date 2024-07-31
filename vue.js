const vm = new Vue({
  el:"#app",
  data: {
    msg: "Thales",
    conteudoNav: [
      {atributo: "https://wa.me/5567991262238?text=Olá, gostaria de mais informações.", conteudo:"Fale Conosco", whatsapp: true },
      {atributo: "#inicio", conteudo:"Inicio",whatsapp: false},
      {atributo: "#servicos", conteudo:"Serviços",whatsapp: false},
      {atributo: "#sobre", conteudo:"Sobre",whatsapp: false},
      {atributo: "#contato", conteudo:"Contato",whatsapp: false},
    ]
  }
})