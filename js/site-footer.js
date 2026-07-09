class sitefooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            ` <footer class="rodape">
           <div class="coluna"> 
               <h4><strong>CLIVEX PRODUTOS</strong></h4>
               <p>feito por 
            dev <strong>anderson c. silva</strong></p>
            </div>
               <div class=" coluna">
               <h4>paginas</h4>
               <a href="../pages/inicio.html">produtos</a>
               <a href="../pages/login.html">login</a>
               <a href="https://github.com/andersoncrespani">desenvolvedor</a>
               <a href="#">trabalhe conosco</a>
            </div>
            <div class="coluna">
               <h4>institucional</h4>
               <a href="#">termos de uso</a>
               <a href="#">privacidade</a>
               <a href="../pages/sobre.html">quem somos</a>
               <a href="#">contato</a>
            </div>
            </footer>`
        ;    
    }
}
customElements.define('site-footer', sitefooter)