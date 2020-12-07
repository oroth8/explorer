 export default function ShipItem(props) {
     if(props.data.topImage)
      {
        let cost=props.data.cost;
        cost=cost.toLocaleString();

        return (
        <div  key={props.data.id} onClick={()=>props.buyFunction(props.data)} className="col" style={{margin:"auto"}}>
            <div className="ship-item" style={{backgroundImage:`url(img/ship/${props.data.topImage})`}} />
        <strong>{props.data.name}: {cost} credits</strong>
            </div>
        ); 
    }
    else return (<></>)
  }
 
