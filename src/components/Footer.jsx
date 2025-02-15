import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
function Footer() {
  return (
    <>
    <footer>
     <div className='container-fluid'>
        <div className="row p-4">
          <div className="col-md-4">
          <h4 className='text-success'><FontAwesomeIcon icon={faVideo} beatFade className='me-3' />Media Player</h4>
          <p className='mt-2' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloribus ipsa ex aperiam ducimus corporis voluptates, harum, alias officia fuga rerum sequi, architecto odio ratione vero consectetur aliquam? Hic, reiciendis.</p> 
          </div>
          
          <div className="col-md-2 text-center mt-4 mt-md-0">
            <h4>Links</h4>
            <Link to={'/'}><p>Landing Page</p></Link>
            <Link to={'/home'}><p>Home Page</p></Link>
            <Link to={'/watchhistory'}><p>Watch History</p></Link>
          </div>
          <div className="col-md-2 text-center mt-4 mt-md-0">
          <h4>Links</h4>
            <Link to={''}><p>React</p></Link>
            <Link to={''}><p>React Bootstrap</p></Link>
            <Link to={''}><p>Bootswatch</p></Link>

          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <h4>Contacct US</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Email Id' />
              <button className='btn btn-warning ms-2'>Submit</button>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <FontAwesomeIcon className='fs-3' icon={faInstagram} />
            <FontAwesomeIcon className='fs-3' icon={faXTwitter} />
            <FontAwesomeIcon className='fs-3' icon={faFacebook} />
            <FontAwesomeIcon className='fs-3' icon={faWhatsapp} />
            <FontAwesomeIcon className='fs-3' icon={faLinkedin} />
            </div>
          </div>

        </div>
     </div>
    </footer>
    </>
  )
}

export default Footer