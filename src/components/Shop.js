
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Shop = ()=>{
    
    const listStyle = {
        listStyle: 'none',
    }

    useEffect(()=>{
        fetchItems();
    },[])

    const [items, setItems] = useState({});
    const fetchItems = async () => {
        const data = await fetch('https://dog.ceo/api/breeds/list/all');
        const breeds = await data.json();
        const filteredBreeds = Object.fromEntries(Object.entries(breeds.message).filter(([_, v]) => v.length > 0 ));
        console.log(filteredBreeds);
        setItems(filteredBreeds);
    }
    
    console.log()
    return(
        <div>
            <h3>Shop</h3>
            {Object.entries(items).map(item => (
                <li key={item[0]}>
                    {item[0]}
                    <ul style={listStyle}>
                        {item[1].map(subBreed => <li key={subBreed}><Link to={`/shop/${item[0]}/${subBreed}`}>{subBreed}</Link></li>)}
                    </ul>
                </li>)
            )}
        </div>
    );
}


export default Shop;