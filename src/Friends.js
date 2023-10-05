function Friend ({hobbies, name}) {
    return (
        <div>
        <h1>{name}</h1>
        <ul>
            {hobbies.map(h => <li>{h}</li>)}
        </ul>
        </div>
    );
}
export default Friend