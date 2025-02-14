import Note from "../components/Buttons/note.jsx"
import Header from "../components/Buttons/Header.jsx"
import Footer from "../components/Buttons/Footer.jsx"

function MainPage(){

    return(
        <>
        <Header/>

           {/*escrever um loop para cada entrada? Descobrir como fazer isso */}

            <Note titulo="Consulta" descricao ="Hospital porto" texto="Consulta dia 10 de Março"/>
            <Note titulo="Teste" descricao ="Ispgaya" texto="Prova de ingles dia 1 de Março"/>
            <Note titulo="IRS" descricao ="" texto="Declaração de gastos ate final de Fevereiro"/>
          
        <Footer/>
      
      </>
    )
}

export default MainPage