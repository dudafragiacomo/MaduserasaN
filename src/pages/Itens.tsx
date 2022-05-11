import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape"; 
import './Itens.css';
const ItensPage = function() { 
    return (
      <> 
        <Cabecalho />
         <main>        
          <h1>Itens</h1>
          <ul>
           <li>Item 1</li>
           <li>Item2</li>
           <li>Item3</li>
        </ul>
    </main>

       <Rodape />
    </>
   );
};

export default ItensPage;