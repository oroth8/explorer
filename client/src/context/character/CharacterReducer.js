export default (state, action) => {
  const DEBUGGING=false;
  if(DEBUGGING){
    console.log('action');
    console.log(action);
  }

  switch (action.type) {
  case "SAVED":{
    return{
      ...state,
      saveMe:false
    }
  }
  case "UPDATE_CHARACTER":
    return{
      ...state,
      ...action.char.data,
      loaded:true,
      missing:false
    }
  case "LOADING":
    return{
      ...state,
      loaded:false
    };
    case "ERROR_NO_CHARACTER":
      console.error("No character in database");      
      return{
        ...state,
        missing:true
      }
  case "UPDATE_PORTRAIT":
    return{ 
      ...state,
      data:{characterImage:action.url}
    };
  case "UPDATE_USER":
    return{ 
      ...state,
      userId:action.id
    }
  case "UPDATE_CHARACTER_PROPERTY":
    let temp=state.data;
    temp[action.name]=action.newData      
    return{       
      ...state,
      data:temp,
      saveMe:true,
    };
  case "UPDATE_SHIPARRAY":      // This takes an array of three items: The ship id, the number of credits the player has left,
    let tempShips=state.data.shipIdArray;       // and the player's new maximum level.
    let shipId=action.newData[0];
    let credits=action.newData[1];
    let maxLevel=action.newData[2];
    // If we have just bought a ship, we can just add it to our array (which will then got put into the state)
    if(action.action==="add") tempShips.push(shipId)
    // If we are selling a ship, we need to make a new array that filters out the sold ship
    else if(action.action==="remove"){
      tempShips=tempShips.filter(ship=>{
        if(ship===action.newData[0]) return false;
        else return true;
      })      
    }
    let tempData=state.data;
    tempData.shipIdArray=tempShips;
    tempData.maxLevel=maxLevel;
    tempData.credits=credits;    
    return{ 
      ...state,
      data:tempData,
      saveMe:true
    }
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};