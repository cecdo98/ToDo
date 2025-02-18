import Note from "../components/Buttons/note.jsx"
import Header from "../components/Buttons/Header.jsx"
import Footer from "../components/Buttons/Footer.jsx"

function MainPage(){
  
  const Notes =[{ id:1, titulo: "Consulta" ,descricao :"Hospital porto" ,tarefa: "Consulta dia 10 de Março"},
                { id:2, titulo: "Teste", descricao: "Ispgaya" , tarefa: "Prova de ingles dia 1 de Março"},
                { id:3, titulo: "IRS", descricao : "" ,tarefa: "Declaração de gastos ate final de Fevereiro"}
              ];
    

    return(
        <>
        <Header/>
        <Note Notes={Notes}/>  
        <Footer/>
      
      </>
    )
}

export default MainPage