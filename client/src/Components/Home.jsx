import { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/images').then(res => setImages(res.data));
    }, []);

    return (
        <div >
            <div className='Banner' style={{ width: '100%' }} >
                <img src='https://cdn.pixabay.com/photo/2016/09/04/20/14/sunset-1645103_1280.jpg' alt='img' style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{display:"flex",flexDirection:"row", gap:"15px", marginTop:"10px"}}>
                {images.map(img => (
                    <div key={img._id} className="card">
                        <img src={img.imageUrl} alt={img.title} />
                        <h3>{img.title}</h3>
                        <p>{new Date(img.date).toLocaleDateString()}</p>
                        <p>By {img.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
