import { useEffect, useState } from 'react';
import './Person.css';
// import React, {component} from 'react';
// para acceder a los hijos se debe pasar en la funcion la palabra {children}
const Person = ({name,lastName,city, age, hairColor, children}) => {
    const [edoCivil, setEdocivil] = useState("Soltero");
    const [edad, setEdad] = useState(age);

    // 2 parametros :(callback, listening: vacio(escucha todo), [variableQueSeEscucha])
    useEffect(()=>{
        //consulta API
        console.log("use effect");
    }, [edoCivil])
    
    const cambiarEdoCivil = () => {
        if(edoCivil==="Soltero"){
            setEdocivil("Casado");
        } else {
            setEdocivil("Soltero");
        }
    }
    const birthday = () => {
        
        setEdad(edad+1);
    }

    return (
        <div className="main">
            <h1>{name}, {lastName}</h1>
            <h3>city: {city}</h3>
            <h3>age: {edad}</h3>
            <h3>hair-color: {hairColor}</h3>
            {children}
            <h3>edoCivil: {edoCivil}</h3>
            <button onClick={cambiarEdoCivil} >Cambiar edoCivil</button>
            <button onClick={birthday} >Birthday</button>
        </div>

    )
}
export default Person;