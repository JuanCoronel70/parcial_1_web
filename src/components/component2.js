import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './components.css';

function Comp2() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => setCats(data))
            .catch(error => console.error('Error fetching cats:', error));
    }, []);

    return (
        <Container>
            <h1>Lista de Gatos</h1>
            <p>Tienes permiso para editar</p>
            <Row className="className='row-cols-1 row-cols-md-3 g-4'">
                {cats.map(cat => (
                    <Col key={cat.id}>
                        <Card className="cat-card">
                            <Card.Img variant="top" src={cat.image?.url} alt={cat.name} className="cat-image" />
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/catEdit/${cat.id}`}>{cat.name}</Link> 
                                </Card.Title>
                                <Card.Text>
                                    {cat.description}
                                </Card.Text>
                                <Card.Text>
                                    Origen: {cat.origin}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Comp2;
