import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideoapi, updateCatApi } from '../service/allApi'

function AllVideos({addStatus,setUCStatus}) {
  const [videos, setvideos]=useState([])
  const [delStatus,setdelStatus]=useState([])
  const getAllVideos= async()=>{
    const  result = await getVideoapi()
    console.log(result);
    setvideos(result.data)
    
  }
  console.log(videos);

  const dragOver=(e)=>{
    e.preventDefault()
  }
  const videoDrop= async(e)=>{
       const {videoDetails,categoryDetails}=JSON.parse(e.dataTransfer.getData("details"))

       const response = categoryDetails.allvideos.filter((item)=>item.id!=videoDetails.id)

       const reqBody = {
        categoryName: categoryDetails.categoryName,
        allvideos:response,
        id:categoryDetails.id
       }

       const result = await updateCatApi(categoryDetails.id,reqBody)
       console.log(result);
       
  }
  
  useEffect(()=>{
    getAllVideos()
  },[addStatus,delStatus])

  return (
    <>
    <h3>All Videos</h3>
    <div className="container-fluid mt-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
      {videos?.length>0 ?
        <div className="row">
            {videos?.map((item)=>(
              <div className="col-md-3 mb-3">
              <VideoCard videoDetails={item} setdelStatus={setdelStatus}/>
              </div>
            ))
            }
        </div>
        :
        <div className=" text-center">
            <img style={{width:"50%"}} src="https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png" alt="" />
            <h4 style={{color:"red"}}>No video added yet</h4>
        </div>
      } 
    </div>
    </>
  )
}

export default AllVideos