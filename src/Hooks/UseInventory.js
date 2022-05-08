import { useEffect, useState } from "react";

const UseInventory = () => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, []);
    return [service]
}

export default UseInventory;