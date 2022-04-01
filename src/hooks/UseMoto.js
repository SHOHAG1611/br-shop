import { useEffect, useState } from "react"

const UseMotos = () => {
    const [motos, setMotos] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setMotos(data))
    }, [])
    return [motos, setMotos]
}
export default UseMotos;