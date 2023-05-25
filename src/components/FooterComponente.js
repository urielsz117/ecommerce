import React from 'react'

function FooterComponente() {
  return (
    <div className='footer'>
            <div className='nosotros'>
                <div className='nosotros2'>
                    <p className='titulo'>Nosotros</p>
                    <p className='dicho'>Somos los numero uno vendiendo juegos con sus expansibles...</p>
                    <p className='dicho'>CDMX Morelos CP 5487</p>
                    <p className='dicho'>777 548 16 45 </p>
                    <p className='dicho'>gamer.33.sae@gmail.com</p>
                </div>
            </div>
            <div className='formulario'>
                <form class="col">
                    <div className='imputsForm'>
                        <input class="form-control" type="text" placeholder="Nombre" required/>
                    </div>
                    <div className='imputsForm'>
                        <input class="form-control" type="number" placeholder="Telefono"  required/>
                    </div>
                    <div className='imputsForm'>
                        <input class="form-control" type="text" placeholder="Comentarios"  required/>
                    </div>
                    <div className='imputsForm'>
                        <button type='submit' class="btn btn-primary mb-3">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default FooterComponente