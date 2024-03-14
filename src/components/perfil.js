import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Perfil(){

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/JuanCoronel70/parcial_1_web/main/data.json')
            .then(response => response.json())
            .then(data => setUserInfo(data))
            .catch(error => console.error('Error fetching user:', error));
    }, []);

    const handleClick = () => {

    }

    return (
        <div className="container" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="col-md-5" style={{textAlign:"center"}}>
                <img src='https://picsum.photos/350' alt='foto de perfil' style={{width:"20%", height:"20%", borderRadius:"100%"}}></img>
                <p></p>

                <Form style={{marginTop:"50px"}}>
                    <Form.Group className="mb-6" controlId="formBasicInput" style={{textAlign:"left"}}>
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="email" placeholder={userInfo.usuario} />
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control type="email" placeholder={userInfo.nombre_completo} />
                                <Form.Label>Descripcion de perfil</Form.Label>
                                <Form.Control type="email" placeholder={userInfo.descripcion_corta} />
                                <Form.Label>URL pagina personal</Form.Label>
                                <Form.Control type="email" placeholder={userInfo.url}/>
                                
                    </Form.Group>

                    <Button onClick={handleClick} style={{marginTop:"60px", width:"100%"}}>
                        Guardar Cambios
                    </Button>
                </Form>
            </div>
        </div>
    );


}

export default Perfil;