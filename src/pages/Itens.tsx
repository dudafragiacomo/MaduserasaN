import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape"; 
import './Itens.css';
import Botao from "./components/botao";

const ItensPage = function() { 
    return (
    <div>
            <Cabecalho />
            <main>        
                <h1>Itens</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                </ul>
                <Botao texto = "enviar"/><Botao texto= "enviar" />
               
          </main>
          <Rodape />
          </div>
       
   );
};

export default ItensPage;