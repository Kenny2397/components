import './Person.css';

const Person = ({name,lastName,city, age, hairColor}) => {
    return (
        <div className="main">
            <h1>{name}, {lastName}</h1>
            <h3>city: {city}</h3>
            <h3>age: {age}</h3>
            <h3>hair-color: {hairColor}</h3>
        </div>
    )
}
export default Person;