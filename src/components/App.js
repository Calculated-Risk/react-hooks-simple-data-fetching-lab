// create your App component here

import { useEffect, useState } from "react";

export default function App() {
    const [image, setImage] = useState(null)

        useEffect(() => {
            fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => setImage(data.message) )
        }, [])

        if(!image){
            return <p>Loading...</p>
        }
    return (
        <>
            <h1>Simple Data Fetching Lab</h1>
            <img src={image} alt='A Random Dog' />
        </>

    );
}