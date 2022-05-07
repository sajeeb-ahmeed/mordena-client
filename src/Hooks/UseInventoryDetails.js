import { useEffect, useState } from "react";

const UseInventoryDetails = inventoryId => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://radiant-river-94662.herokuapp.com/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [inventoryId]);
    return [inventory]
}

export default UseInventoryDetails;