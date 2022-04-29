import { useState } from "react";


export const useErro = () => {
    const [erro, setErro] = useState('');

    const handleErro = (mensagem) => {
        setErro(mensagem);
    };

    return [erro, handleErro];
}