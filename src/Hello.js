function Hello(props){
    return (
    <div>
    <p>
         Hi {props.to} - {props.author} - {props.salary}! 
    </p>
    </div>
    );
}

Hello.defaultProps = {
    to:"Bob",
    author: "Jenny",
    salary: `salary: 10000}`
}
export default Hello;