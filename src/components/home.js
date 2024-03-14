import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './components.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


function Home(){
    const [userInfo, setUserInfo] = useState([]);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClickProfile = () => {
        navigate('/perfil')

    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/JuanCoronel70/parcial_1_web/main/data.json')
            .then(response => response.json())
            .then(data => setUserInfo(data))
            .catch(error => console.error('Error fetching user:', error));
    }, []);

    console.log(userInfo)

    return (
        
        
        <Container>

<Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Image detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src="https://picsum.photos/350" style={{width:"100%", height:"100%"}} alt='post' onClick={handleClickProfile}></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

            
            <Row style={{marginTop:"5%", marginBottom:"5%", textAlign:"left"}}>
                <Col sm={4}>
                <img src="https://picsum.photos/350" alt='post' onClick={handleClickProfile}></img>
                </Col>
                <Col sm={8}>
                    <row>
                        <h1>{userInfo.usuario}</h1>
                    </row>
                    <row>
                        <p>{userInfo.nombre_completo} {userInfo.descripcion_corta}</p>
                    </row>
                    <row>
                        <p>{userInfo.url}</p>
                    </row>
                    <row>
                        <p>{userInfo.cantidad_posts} Posts {userInfo.cantidad_seguidores} Followers {userInfo.cantidad_cuentas_Seguidas} Following</p>
                    </row>
                </Col>
            </Row>


    <Row className="className='row-cols-1 row-cols-md-3 g-4'" style={{marginBottom:"5%"}}>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post'onClick={handleShow} ></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>
            
            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>
        
    </Row>

    </Container>


  );
}




export default Home;