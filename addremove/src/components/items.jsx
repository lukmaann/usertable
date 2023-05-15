function Items(props){
    // eslint-disable-next-line react/prop-types
    return <li id={props.id} onClick={props.on} >{props.item}</li>
}


export default Items;