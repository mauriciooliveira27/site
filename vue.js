// const vm = new Vue({
//   el:"#app",
//   data: {
//     conteudoNav: [
//       {atributo: "https://wa.me/5567991262238?text=Olá, gostaria de mais informações.", conteudo:"Fale Conosco", whatsapp: true },
//       {atributo: "#inicio", conteudo:"Inicio",whatsapp: false},
//       {atributo: "#servicos", conteudo:"Serviços",whatsapp: false},
//       {atributo: "#sobre", conteudo:"Sobre",whatsapp: false},
//       {atributo: "#contato", conteudo:"Contato",whatsapp: false},
//     ],
//     tituloMain: "servicos",
//     contentCarrossel: [
//       {img: "./imagens/porta.jpg", conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus! Maiores velit dignissimos laudantium temporibus  voluptate quae hic similique! Obcaecati in doloribus illo, nulla explicabo quaerat eligendi!1Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus! Maiores velit dignissimos laudantium spernatur  Obcaecati in doloribus illo, nulla explicabo quaerat eligendi!1", nome: "porta", margin: true},
//       {img: "./imagens/portão.jpg", conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus! Maiores velit dignissimos laudantium temporibus  voluptate quae hic similique! Obcaecati in doloribus illo, nulla explicabo quaerat eligendi!1Lorem ipsum dolor sit amet consectetur adipisicing elit.2", nome: "portão"},
//       {img: "./imagens/ai-gerado-de-entrada-de-estilo-moderno_23-2150692301.jpg", conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus! Maiores velit dignissimos laudantium temporibus  voluptate quae hic similique! Obcaecati in doloribus illo, nulla explicabo quaerat eligendi!1Lorem ipsum dolor sit amet consectetur adipisicing elit. sdaflkjasd lksdafj kldsaj as j", nome: "janela3"}
//     ],
//     currentIndex: 0,
//   },
//   methods: {
//     handleScroll(event) {
//       const scrollTop = event.target.scrollTop;
//       const itemHeight = event.target.scrollHeight / this.contentCarrossel.length;
//       const newIndex = Math.floor(scrollTop / itemHeight);

//       if (newIndex !== this.currentIndex) {
//         this.currentIndex = newIndex;
//       }
//     }
//   },
//   computed: {
//     filteredContent() {
//       return [this.contentCarrossel[this.currentIndex]];
//     }
//   }
// })