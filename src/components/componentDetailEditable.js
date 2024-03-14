import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CatDetailsEd() {
    const { id } = useParams();
    const [cat, setCat] = useState(null);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
            .then(response => response.json())
            .then(data => setCat(data))
            .catch(error => console.error('Error fetching cat details:', error));
    }, [id]);

    const handleInputChange = (event, field) => {
        const value = event.target.value;
        setCat(prevCat => ({
            ...prevCat,
            [field]: value
        }));
    };

    if (!cat) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{cat.name} Details</h1>
            <img src={cat.image?.url} alt={cat.name} style={{ width: '300px', height: 'auto' }} />
            <p>
                Descripción:
                <input
                    type="text"
                    value={cat.description}
                    onChange={(e) => handleInputChange(e, 'description')}
                />
            </p>
            <p>
                Origen:
                <input
                    type="text"
                    value={cat.origin}
                    onChange={(e) => handleInputChange(e, 'origin')}
                />
            </p>
            <p>
                Temperamento:
                <input
                    type="text"
                    value={cat.temperament}
                    onChange={(e) => handleInputChange(e, 'temperament')}
                />
            </p>
        </div>
    );
}

export default CatDetailsEd;
