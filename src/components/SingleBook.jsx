
import React, { useContext } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBRipple,
    MDBCardText,
    MDBBtn,
    MDBCol
     
  } from 'mdb-react-ui-kit';
  import { ThemeContext } from '../modules/Contexts';
  import { useNavigate } from "react-router-dom";
  import './SingleBook.css';

export default  function SingleBook({book, selected, setSelected} ) {

    const navigate = useNavigate();
let [theme] = useContext(ThemeContext); // richiamo il paramento theme senza setTheme dal context senza passare più le props in  quanto la funzione
// è stata già creata nella navbar.jsx


    return (
        <MDBCol sm='4'  >
            <MDBCard background={theme} className='mt-2 mb-2 misura-card' style={ selected===book.asin ? {border: '3px solid red'} : {border:'none'}} onClick={() => setSelected(book.asin, console.log(selected))} >
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={book.img} fluid alt={book.title} />
                <b>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </b>    
                </MDBRipple>
                <MDBCardBody >
                    <MDBCardTitle>{book.title}</MDBCardTitle>
                    <MDBCardText>
                    Categoria {book.category}
                    </MDBCardText>
                    <MDBBtn color='light' rippleColor='dark' className='me-1' href='#'>€ {book.price}</MDBBtn>
                    <MDBBtn color='light' rippleColor='dark' className='ms-1' onClick={() => navigate(`/detailsbooks/${book.asin}`)}>Dettagli</MDBBtn>
                </MDBCardBody>
                
            </MDBCard>
            
        </MDBCol>   
    
    )
}