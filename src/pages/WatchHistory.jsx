import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { delHistoryapi, getHistoryApi } from '../service/allApi'

function WatchHistory() {
  const [videos,setvideos]=useState([])
  const [delstatus,setdelstatus]=useState([])
  const getAllVideos = async()=>{
    const result = await getHistoryApi()
    console.log(result);
    setvideos(result.data)   
  }
  console.log(videos);

  const handleDelete = async(id)=>{
      const result = await delHistoryapi(id)
      console.log(result);
      if(result.status>=200&&result.status<300){
        setdelstatus(result)
      }
    }

  useEffect(()=>{
    getAllVideos()
  },[delstatus])
  return (
    <>
      <div className="container d-flex justify-content-between">
        <h4>Watch History</h4>
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <h4><FontAwesomeIcon icon={faHouse} /><span className='d-md-inline d-none'> Back Home</span></h4>
        </Link>      </div>
      {videos?.length>0?
        <div className="container w-100 mt-4 mb-5 table-responsive">
        <table className='table table-bordered text-center'>
          <thead>
            <tr className=''>
              <th className=''>#</th>
              <th className=''>Caption</th>
              <th className=''>URL</th>
              <th className=''>Time Stamp</th>
              <th className=''>Action</th>
            </tr>
          </thead>
          <tbody>
            {videos?.map((item,index)=>(
              <tr>
              <td className="">{index+1}</td>
              <td className="">{item?.caption}</td>
              <td className=""><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
              <td className="">{item.timestamp}</td>
              <td className=""><Button onClick={()=>handleDelete(item.id)}  variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
              </td>
            </tr>
            ))
              }
          </tbody>
        </table>
      </div>
      :
      <h3 className='text-center' style={{color:"red"}}>No Watch History</h3>}
    </>
  )
}

export default WatchHistory