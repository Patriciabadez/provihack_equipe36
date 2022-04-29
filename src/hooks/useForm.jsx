import { useState } from "react";


export const useForm = (estadoInicial) => {
    const [data, setData] = useState(estadoInicial);

    const handleChange = (prop) => (event) => {
        setData({ ...data, [prop]: event.target.value });
    };

    return [data, handleChange];
}