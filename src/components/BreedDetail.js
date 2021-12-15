import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Breed = (props)=>{
    
    let id = useParams();
    const listStyle = {
        listStyle: 'none',
    }

    useEffect(()=>{
        fetchItem();
    },[])

    const [item, setItem] = useState({});
    
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://dog.ceo/api/breed/${id.breed}/${id.subBreed}/images/random`);
        const item = await fetchItem.json();

        console.log(item.message);
        setItem(item.message);
    }
    
   
    return(
        <div>
            <h3>Breed Details</h3>
            <h4>Breed: {id.breed}</h4>
            <h4>SubBreed: {id.subBreed}</h4>
            <h4><button onClick={fetchItem}>Next</button></h4>
            <img src={item}></img>
        </div>
    );
}


export default Breed;