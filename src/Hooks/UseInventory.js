import { useEffect, useState } from "react";

const UseInventory = () => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://radiant-river-94662.herokuapp.com/service`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, []);
    return [service]
}

export default UseInventory;