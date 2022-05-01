import './Person.css';
// import React, {component} from 'react';
// para acceder a los hijos se debe pasar en la funcion la palabra {children}
const Person = ({name,lastName,city, age, hairColor, children}) => {
    return (
        <div className="main">
            <h1>{name}, {lastName}</h1>
            <h3>city: {city}</h3>
            <h3>age: {age}</h3>
            <h3>hair-color: {hairColor}</h3>
            {children}
        </div>

    )
}
export default Person;