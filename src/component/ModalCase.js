import React from 'react'

function ModalCase({setIsOpen, film}) {
  return (
    // <div className='' onClick={()=>{ setIsOpen(false)}}>
    //     <div id='modal1' style={{display:'block', top:'35%'}}>
    //         <div className='modal-content'>
    //             <h2>Video for {film.title}  </h2>
    //             <p><iframe width="50%" height="500" src={film.clip} title={film.title}> 
    //             allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen</iframe> </p>
    //         </div>
           
    //     </div>
    // </div>
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
          <h2>Video for {film.title}</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src={film.clip}
              title={film.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <button className="close-button" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  )
}

export default ModalCase