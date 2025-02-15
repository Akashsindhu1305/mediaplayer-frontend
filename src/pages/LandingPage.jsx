import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <Container className='mt-4 mb-5 w-100'>
        <Row>
          <Col sm={12} md={6}><h1>Welcome<span className='text-warning'>Media Player</span></h1>
            <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum at et ab quos eos, quibusdam possimus laboriosam illo facere maxime, quam, illum impedit in cupiditate tempore. Facilis delectus hic, voluptates illum similique dolorum enim aspernatur pariatur minus blanditiis nostrum impedit incidunt et, possimus, nihil dicta sit optio architecto quas voluptatum!</p>
            <Link to={'/home'} className='btn btn-warning'>Get Started</Link></Col>
          <Col sm={12} md={6} className='d-flex justify-content-center mt-3 mt-md-0'>
            <img style={{ width: "400px", height: "300px" }} src="https://cdn.dribbble.com/users/223661/screenshots/1718151/play-that-funky-music.gif" alt="" />
          </Col>
        </Row>
      </Container>
      {/* cards */}
      <div className='container-fluid w-100'>
        <div className='text-center text-warning'><h1>Features</h1></div>
        <div className="row mt-4">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center mt-3">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" height={"250px"} src="https://i.pinimg.com/originals/92/0f/32/920f32f24b9514d46b0ef8ed20949130.gif" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 d-flex justify-content-center mt-3">
              <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" height={"250px"} src="https://cdn.dribbble.com/users/583436/screenshots/1698964/3cols.gif" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 d-flex justify-content-center mt-3">
              <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" height={"250px"} src="https://i.pinimg.com/originals/08/06/99/080699e48679c05a9a4d730548355c44.gif" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-1">
          </div>
        </div>
      </div>

      {/* video */}
      <div className="row mt-5 w-100">
        <div className="col-md-1"></div>
        <div className="col-md-10 px-5">
          <div className="row p-5 border border-3 rounded-4">
            <div className="col-md-6">
              <h1 className='text-warning'>Simple Fast and Powwrful</h1>
              <p><span className='fs-2'>Play Everythind</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis?</p>
              <p><span className='fs-2'>Play Everythind</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis?</p>
              <p><span className='fs-2'>Play Everythind</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veritatis?</p>

            </div>
            <div className="col-md-6">
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/gbvch9PI8Vg?list=RDGMEMCMFH2exzjBeE_zAHHJOdxgVMgbvch9PI8Vg" title="Mathapoove Muthu Song | 4K Song | Balram vs Tharadas | Mammootty | Katrina Kaif | Jassie Gift" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default LandingPage