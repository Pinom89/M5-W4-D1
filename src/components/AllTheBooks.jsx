import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import   './AllTheBooks.css';
import SingleBook from './SingleBook';
import { useState } from 'react';
import CommentArea from './CommentArea';



// all'iterno della function card passo come props nelle graffe la props films(detto books) e la props search
export default function Card({films, search}) {  
        /* creo tramite useState un valore di partenza vuoto in quanto la barra di ricerca è vuota e si valorizzerò tramite la funzione SetSearch che andrà a prendere
         il value del componente cerca
    */ 
         const [selected, setSelected] = useState("")
         

         
    return (
    <>
      <MDBContainer> 
            <MDBRow>
               
            </MDBRow>
              {/* trasferisco tramite props il campo film del map films in singlebook */}
            <MDBRow className='d-flex'>      
              <MDBCol md='9' className='d-flex flex-wrap'>
                {films
                .filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
                .map(film => (

                    <SingleBook selected={selected} setSelected={setSelected} film={film}/>
                ))}       
              </MDBCol>
              <MDBCol md='3'>
                ciao

                <CommentArea asin={selected} />
 
              </MDBCol>  
            </MDBRow>
     </MDBContainer> 
    </>
  );
};
