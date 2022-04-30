import { useState } from "react";


export function useData(estadoInicial){
    const [data, setData] = useState(estadoInicial);

    const handleData = (props) => {
        setData(props);
    };

    return [data, handleData];
}