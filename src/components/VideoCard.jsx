import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, delVideoapi } from '../service/allApi';


function VideoCard({ videoDetails, setdelStatus, present }) {
  const [show, setShow] = useState(false)
  const HandleClose = () => setShow(false)
  const HandleShow = async () => {
    setShow(true)

    let caption = videoDetails?.caption
    let url = videoDetails?.vidurl
    const time = new Date()
    console.log(time);
    const timestamp = new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", second: "2-digit" }).format(time)
    console.log(timestamp);

    const reqBody = {
      caption,
      url,
      timestamp
    }

    const result = await addHistoryApi(reqBody)
    console.log(result);

  }
  const handleDelete = async (id) => {
    const result = await delVideoapi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setdelStatus(result)
    }
  }

  const videoDrag = (e, VDetails) => {
    console.log(e);
    console.log(VDetails);
    e.dataTransfer.setData("videoDetails", JSON.stringify(VDetails))

  }

  return (
    <>
      <Card style={{ width: '100%', height: "100%" }} draggable onDragStart={(e) => videoDrag(e, videoDetails)} >
        {!present && <Card.Img onClick={HandleShow} variant="top" style={{ width: "100%", height: "130px" }} src={videoDetails?.imgurl} />
        } 
         <Card.Body className='d-flex justify-content-around'>
          <Card.Title onClick={HandleShow} style={{ color: "yellow" }}>{videoDetails?.caption}</Card.Title>
          {!present && <Button onClick={() => handleDelete(videoDetails?.id)} style={{ height: "40px" }} className='m-1' variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
          }        </Card.Body>
      </Card>
      <Modal show={show} onHide={HandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <iframe width="100%" height="360px" src={`${videoDetails?.vidurl}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard