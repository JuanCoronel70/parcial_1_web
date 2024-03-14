import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CatDetails() {
    const { id } = useParams();
    const [cat, setCat] = useState(null);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
            .then(response => response.json())
            .then(data => setCat(data))
            .catch(error => console.error('Error fetching cat details:', error));
    }, [id]);

    if (!cat) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{cat.name} Details</h1>
            <img src={cat.image?.url} alt={cat.name} style={{ width: '300px', height: 'auto' }} /> 
            <p>{cat.description}</p>
            <p>Origin: {cat.origin}</p>
            <p>Temperament: {cat.temperament}</p>
        </div>
    );
}

export default CatDetails;
