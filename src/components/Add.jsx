import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useState } from 'react';
import { addVideoApi } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails,setvideoDetails]=useState({
    caption:"",
    imgurl:"",
    vidurl:""
  })
  console.log(videoDetails);
  
 const handleCancel=()=>{
  setvideoDetails({
    caption:"",
    imgurl:"",
    vidurl:""
  })
 }

 const handleAdd= async ()=>{
  const {caption,imgurl,vidurl}=videoDetails
  if(!caption||!imgurl||!vidurl){
    // alert("Fill the form completly")
    toast.info("Fill the form completly")
  }else{
    if(vidurl.startsWith("https://youtu.be/")){
      let link=`https://www.youtube.com/embed/${vidurl.slice(17,28)}`
      const result=await addVideoApi({caption,imgurl,vidurl:link})
      console.log(result);
      if(result.status>=200&&result.status<300){
        // alert("Upload Successfull")
        toast.success("Upload Successfull")
        setAddStatus(result)
      }else{
        // alert("Something went wrong")
        toast.warning("Something went wrong")

      }
    }
    else{
      let link=`https://www.youtube.com/embed/${vidurl.slice(-11)}`
      const result=await addVideoApi({caption,imgurl,vidurl:link})
      console.log(result);
      if(result.status>=200&&result.status<300){
        // alert("Upload Successfull")
        toast.success("Upload Successfull")
        setAddStatus(result)
      }else{
        // alert("Something went wrong")
        toast.warning("Something went wrong")
      }
    }
  }
 }

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  return (
    <>
    <h4><span className='d-md-inline d-none'>Upload New Video</span> <FontAwesomeIcon icon={faCloudArrowUp} onClick={handleShow} className='ms-3'/></h4>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'><FontAwesomeIcon icon={faFilm} />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Please fill the following details</h5>
            <form action="" className='p-3 border border-2 rounded-3 mt-3'>
                <input type="text" value={videoDetails.caption} placeholder='Video Caption' onChange={(e)=>setvideoDetails({...videoDetails,caption:e.target.value})} className='form-control'/>
                <input type="text" value={videoDetails.imgurl} placeholder='Video Image' onChange={(e)=>setvideoDetails({...videoDetails,imgurl:e.target.value})} className='form-control my-3'/>
                <input type="text" value={videoDetails.vidurl} placeholder='Video Url' onChange={(e)=>setvideoDetails({...videoDetails,vidurl:e.target.value})} className='form-control'/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
        <ToastContainer position='top-center' theme="colored" autoClose={2000}/>
      </Modal>
    </>
  )
}

export default Add