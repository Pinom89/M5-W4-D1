import  { useState} from 'react';
import './App.css';
import AllTheBooks from './components/AllTheBooks.jsx';
import Navbar from './components/Navbar.jsx';
import MyFooter from './components/MyFooter.jsx';
import Welcome from './components/Welcome.jsx';
import fantasy from './json/fantasy.json';
import history from './json/history.json';
import horror from './json/horror.json';
import romance from './json/romance.json';
import scifi from './json/scifi.json';
import { MDBBtn } from 'mdb-react-ui-kit';
import { ThemeContext } from './modules/Contexts.js'

// ho importato il componente ThemeContext da contexts.js che andrà inserito sempre tra le graffe


function App() {

  // creo contenitore ingnettabile utilizzabile per hook  Constext
  let [theme, setheme] = useState('dark');


  let [generes, setGeneres] = useState('standard');

  let bookstotali = [].concat(fantasy, history, horror, romance, scifi);
  //console.log(bookstotali);

  // logica per la barra di ricerca
  const [search, setSearch] = useState('')
  
  // definisco con la constante handleInputChange che andrà a prendere il value del componente cerca
  // ogni qualvolta verrà digitato un carattere sulla tastiera presente nel componente cerca.jsx
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  // fine logica

  }
 
  
  return (

    <div className="App">

      {/*inseirsco nel value i campi che voglio condividere tra tutti i componenti  */}
      <ThemeContext.Provider value={[theme, setheme]}> 
      {/* inglobo ThemeContext in tutto il codice o dove voglio venga applicato inserendo all'interno
      i componenti (detti consumers) */}
      <Navbar handleInputChange={handleInputChange} search={search} />
      <Welcome/>
    
            <div className='d-flex justify-content-center align-items-center'>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('fantasy')}>
        Fantasy
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('horror')}>
        Horror
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('scifi')}>
        Scifi
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('history')}>
        History
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('romance')}>
        Romance
      </MDBBtn>
      </div>
    
    
{/*inserisco una condizione simile all'if in cui indico che se generes ha un determinato valore allora viene
 passato a allThebook la props (films)che è il nome dello stato della funzione setGeneres al click del mouse
 */}
      {generes === 'standard' && <AllTheBooks search={search} films={bookstotali} />}
      {generes === 'fantasy' && <AllTheBooks search={search} films={fantasy} />}
      {generes === 'horror' && <AllTheBooks search={search} films={horror} />}
      {generes === 'scifi' && <AllTheBooks search={search} films={scifi} />}
      {generes === 'history' && <AllTheBooks search={search} films={history} />}
      {generes === 'romance' && <AllTheBooks search={search} films={romance} />}
    

    <MyFooter/>

    </ThemeContext.Provider>
    </div>
  );
}

export default App;
