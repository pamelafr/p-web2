import "./Input.css"
import React, {useState} from "react";

export default props => {
   
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        console.log(e.target.value)
        setValor(e.target.value)
    }
    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            <input value={valor} onChange={(quandoMudar)} />
            <input value={valor}  />
            <input value={undefined} />
            </div>
        </div>
    )
}