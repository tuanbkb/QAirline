function CountryCard(props) {
    return <div className={`border-2 rounded-tl-3xl rounded-br-3xl h-60 m-2 ${props.className}`}>
        <img className="absolute"></img>
        <h1 className="">{props.name}</h1>
    </div>;
}

export default CountryCard;
