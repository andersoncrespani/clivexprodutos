class siteheader extends HTMLElement {
connectedCallback() {
    this.innerHTML =
    `<header class="cabecalho">
        <div class="logo">clivex produtos</div>
        <nav class="navegacao">
            <a href="#">redes</a>
            <a href="#">contato</a>
            <a href="#">produtos</a>
            <a href="#">sobre</a>
           </nav>
          </header>`
       ;
   }
}

customElements.define('site-header', siteheader)