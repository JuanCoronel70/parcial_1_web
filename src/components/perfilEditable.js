import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from 'react-intl'; // Importa FormattedMessage desde react-intl

function PerfilEditable(){

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/JuanCoronel70/parcial_1_web/main/data.json')
            .then(response => response.json())
            .then(data => setUserInfo(data))
            .catch(error => console.error('Error fetching user:', error));
    }, [])

    const handleClick = () => {

    }

    return (
        <div className="container" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="col-md-5" style={{textAlign:"center"}}>
                <img src='https://picsum.photos/350' alt='foto de perfil' style={{width:"20%", height:"20%", borderRadius:"100%"}}></img>
                <p></p>

                <Form style={{marginTop:"50px"}}>
                    <Form.Group className="mb-6" controlId="formBasicInput" style={{textAlign:"left"}}>
                        <Form.Label><FormattedMessage id="username" /></Form.Label>
                        <Form.Control type="email" placeholder={userInfo.usuario} />
                        <Form.Label><FormattedMessage id="fullname" /></Form.Label>
                        <Form.Control type="email" placeholder={userInfo.nombre_completo} />
                        <Form.Label><FormattedMessage id="profileDescription" /></Form.Label>
                        <Form.Control type="email" placeholder={userInfo.descripcion_corta} />
                        <Form.Label><FormattedMessage id="personalURL" /></Form.Label>
                        <Form.Control type="email" placeholder={userInfo.url}/>
                    </Form.Group>

                    <Button onClick={handleClick} style={{marginTop:"60px", width:"100%"}}>
                        <FormattedMessage id="saveChanges" />
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default PerfilEditable;
