import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, delCategoryApi, getCatrgotyApi, updateCatApi } from '../service/allApi'


function Categories({videoDetails,uCStatus}) {
  const [show, setShow] = useState(false);
  const [delStatus, setdelStatus] = useState("")
  const [categoryStatus, setcategoryStatus] = useState("")
  const [categoryName, setcategoryName] = useState("")
  const [allCategory, setallCategory] = useState([])
  const [updateCatStatus,setupdateCatStatus]=useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(categoryName);

  const handleCancel = () => {
    setcategoryName('')
  }

  const handleAddC = async () => {
    if (!categoryName) {
      alert('Enter Category Name')
    } else {
      const result = await addCategoryApi({ categoryName, allvideos: [] })
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert('Category Added Successfully')
        handleCancel()
        handleClose()
        setcategoryStatus(result)

      } else {
        alert("Something went wrong")
      }
    }
  }

  const handleDelete = async (id) => {
    const result = await delCategoryApi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setdelStatus(result)
    }
  }

  const getCategory = async () => {
    const result = await getCatrgotyApi()
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setallCategory(result.data)
    }
  }
  console.log(allCategory);

  const videoOver = (e) => {
    e.preventDefault()
  }

  const videoDrop = async (e, categoryDetails) => {
    console.log(categoryDetails);

    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    if (categoryDetails.allvideos.find((item) => item.id == videoDetails.id)) {
      alert("Video already added to the category")
    } else {
      categoryDetails.allvideos.push(videoDetails)
      console.log(categoryDetails);

      const result = await updateCatApi(categoryDetails.id, categoryDetails)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setupdateCatStatus(result)
      }
     
    }
  }

  const videoDrag=(e,videoDetails,categoryDetails)=>{
    console.log(videoDetails,categoryDetails);
    
    const details={
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("details",JSON.stringify(details))
  }

  useEffect(() => {
    getCategory()
  }, [categoryStatus, delStatus,updateCatStatus,uCStatus])
  return (
    <>
      <h3>Category</h3>
      <button className="btn btn-warning w-100 mt-3" onClick={handleShow}>Add Category</button>
      {allCategory?.length > 0 ?
        allCategory?.map((item) => (
          <div className="border border-2 mt-3 rounded-3 p-3" droppable onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e, item)}>
            <div className="d-flex justify-content-between align-items-center p-3">
              <h5>{item.categoryName}</h5>
              <Button variant="danger" onClick={() => handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></Button>
            </div>
            {item.allvideos?.length > 0 &&
              item?.allvideos.map((video) => (
                <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
                  <VideoCard videoDetails={video} present={true} />
                </div>
               
              ))
        }


          </div>
        ))

        :
        <h5 className='mt-5' style={{ color: "red" }}>No Category Added</h5>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border rounded'>
            <input type="text" placeholder='Enter Category Name' value={categoryName} className='form-control' onChange={(e) => setcategoryName(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddC}>Add Category</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Categories