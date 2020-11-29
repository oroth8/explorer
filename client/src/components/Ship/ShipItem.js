
 export default function ShipItem(props) {
     console.log(props.data.topImage);
     if(props.data.topImage)
        return (
        <div  key={props.data.id} className="col" style={{margin:"auto"}}>
            <div className="ship-item" style={{backgroundImage:`url(img/ship/${props.data.topImage})`}} />
        <strong>{props.data.name}: {props.data.cost} credits</strong>
            </div>
        );
    else return (<></>)
  }
 