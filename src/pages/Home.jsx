import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import AllVideos from '../components/AllVideos'
import Categories from '../components/Categories'

function Home() {
  const [addStatus, setAddStatus] = useState([])
  const[uCStatus,setUCStatus] = useState({})
  return (
    <>
      <div className="container d-flex justify-content-between mt-5">
        <Add setAddStatus={setAddStatus}/>
        <Link to={'/watchhistory'} style={{ textDecoration: 'none' }}>
          <h4>Watch History</h4>
        </Link>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-9">
            <AllVideos addStatus={addStatus} setUCStatus={setUCStatus}/></div>
          <div className="col-md-3"><Categories uCStatus={uCStatus} /></div>
        </div>
      </div>
    </>
  )
}

export default Home