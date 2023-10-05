function Lottery({s1, s2, s3}){
    const winner = s1 === s2 && s2 === s3;

    return (
        <div className = "Machine">
            <b>{s1}</b> <b>{s2}</b> <b>{s3}</b>
            <p> You {winner ? "win!" : "lose!"}</p>
        </div>
    );
} export default Lottery;