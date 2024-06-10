import React from 'react'

export default function AddComment( {creaRecensione, valoreInput, setValoreInput, rating, setRating} ) {
  return (
    <form className='d-flex flex-column justify-content-center align-items-center gap-2 mt-2'>
                    <input
                        type="text"
                        value={valoreInput}
                        onChange={(event) => setValoreInput(event.target.value)}
                        placeholder='inserisci una recensione'
                        required
                    />
                     <input
                        type="text"
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                        placeholder='vota da 1 a 5'
                        required
                    />
                    <button
                        type="button"
                        onClick={creaRecensione} 
                    >   
                        Invia
                    </button>
                   
                </form>
  )
}
