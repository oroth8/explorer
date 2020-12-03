export default (state, action) => {
  console.log('action');
  console.log(action);
  
  switch (action.type) {
  case "UPDATE_CHARACTER":
    console.log("Updated");
    console.log(action.char);
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
      console.log("NO CHAR");
      
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
      needToSave:true,
    };
  case "UPDATE_SHIPARRAY": 
    let tempShips=state.data.shipIdArray;
    let shipId=action.newData[0];
    let credits=action.newData[1];
    let maxLevel=action.newData[2];
    if(action.action==="add") tempShips.push(shipId)
    else if(action.action==="remove"){
      console.log("Removing "+tempShips[0]+" from "+shipId);
      
      tempShips=tempShips.filter(ship=>{
        if(ship==shipId) return false;
        else return true;
      })      
    }
    let tempData=state.data;
    tempData.shipIdArray=tempShips;
    tempData.maxLevel=maxLevel;
    tempData.credits=credits;    
    console.log(tempData);    
    return{ 
      ...state,
      data:tempData
    }
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};