import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './components.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { FormattedMessage } from 'react-intl'; 

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
                    <Modal.Title>
                        <FormattedMessage id="imageDetail" /> 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://picsum.photos/350" style={{width:"100%", height:"100%"}} alt='post' onClick={handleClickProfile}></img>
                </Modal.Body>
                <Modal.Footer> 
                    <Button variant="secondary" onClick={handleClose}>
                        <FormattedMessage id="close" />
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <Row style={{marginTop:"5%", marginBottom:"5%", textAlign:"left"}}>
                <Col sm={4}>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleClickProfile} style={{borderRadius:"100%"}}></img>
                </Col>
                <Col sm={8}>
                    <Row>
                        <h1>{userInfo.usuario}</h1>
                    </Row>
                    <Row>
                        <p>{userInfo.nombre_completo} {userInfo.descripcion_corta}</p>
                    </Row>
                    <Row>
                        <p>{userInfo.url}</p>
                    </Row>
                    <Row>
                        <p>{userInfo.cantidad_posts} <FormattedMessage id="posts" /> {userInfo.cantidad_seguidores} <FormattedMessage id="followers" /> {userInfo.cantidad_cuentas_Seguidas} <FormattedMessage id="following" /></p> {/* Internacionaliza los textos aquí */}
                    </Row>
                </Col>
            </Row>


    <Row className="className='row-cols-1 row-cols-md-3 g-4'" style={{marginBottom:"5%"}}>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}> 
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post'onClick={handleShow} ></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}> 
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>
            
            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>

            <Col style={{marginBottom:"100px"}}>
                <div>
                    <img src="https://picsum.photos/350" alt='post' onClick={handleShow}></img>
                </div>
            </Col>
        
    </Row>

    </Container>


  );
}




export default Home;