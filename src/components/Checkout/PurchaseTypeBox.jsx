function PurchaseTypeBox(props) {
    return (
        <img className={`border-x-2 border-t-2 rounded-t-xl w-20 cursor-pointer ${props.type === true ? "bg-theme-primaryContainer" : ""}`} src={props.src} onClick={props.onClick}></img>
    );
}

export default PurchaseTypeBox;