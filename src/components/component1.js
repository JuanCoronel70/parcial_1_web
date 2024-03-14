import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Comp1() {
    const [tittleText, setTittleText] = useState("Acceder");
    const [subtittleText, setSubtittleText] = useState("Usa tu cuenta de UniAlpes");
    const [correoIngresado, setCorreoIngresado] = useState("");
    const [password, setPassword] = useState("");
    const [placeHolder, setPlaceHolder] = useState("Correo electrónico");
    const [users, setUsers] = useState([]); // Estado para almacenar los datos del JSON
    const navigate = useNavigate();
    const [acceso, setAcceso] = useState(false);

    
    useEffect(() => {
        fetch('https://my.api.mockaroo.com/schema1.json?key=d9f6c5d0')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setUsers(data); // Asignar los datos del JSON al estado 'users'
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []); // useEffect se ejecuta solo una vez cuando el componente se monta

    console.log(users)

    const handleInputChange = (event) => {
        if (placeHolder === "Correo electrónico") {
            setCorreoIngresado(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    };

    const handleClick = () => {
        if (placeHolder === "Correo electrónico" && correoIngresado) {
            setTittleText(correoIngresado);
            setPlaceHolder("Contraseña");
            setSubtittleText("");
        } else if (placeHolder === "Contraseña" && password) {
            console.log("Correo electrónico:", correoIngresado);
            console.log("Contraseña:", password);


            // Verificar las credenciales
            const user = users.find(user => user.email === correoIngresado && user.password === password);
            if (user && user.role === true) {
                console.log("Tiene acceso!");
                navigate('/partsAccess');

            }
            else {
              console.log("No tiene acceso")
              navigate('/partsNotAccess');
              
            }

            


            
        }
    };

    return (
        <div className="container" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="col-md-5" style={{textAlign:"center"}}>
                <h1>{tittleText}</h1>
                <p>{subtittleText}</p>

                <Form style={{marginTop:"50px"}}>
                    <Form.Group className="mb-6" controlId="formBasicInput">
                        <Form.Control style={{height:"60px"}} type={placeHolder === "Contraseña" ? "password" : "text"} placeholder={placeHolder} value={placeHolder === "Correo electrónico" ? correoIngresado : password} onChange={handleInputChange} />
                        <Form.Text className="text-muted">We'll never share your credentials with anyone else.</Form.Text>
                    </Form.Group>

                    <Button onClick={handleClick} variant="primary" style={{marginTop:"60px"}}>
                        Siguiente
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Comp1;

