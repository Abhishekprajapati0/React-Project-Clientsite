import React, { useEffect, useState } from "react";
import axios from 'axios';

function FetchApi() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://picsum.photos/v2/list");
                setImages(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="main">
            {images.map((image, i) => (
                <img key={i} src={image.download_url} alt={`Image ${i}`} />
            ))}
        </div>
    );}

export default FetchApi;
