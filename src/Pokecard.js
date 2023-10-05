function  PokeCard({name, type, image}){
    return(
        <div>
        <ul>
            {name}
            <br></br>
            <img src = {image}/> 
            <br></br>
            {type}
        </ul>
        </div>
    )

}

export default PokeCard;