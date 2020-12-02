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
    break;
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
      data:temp
    };
  case "UPDATE_SHIPARRAY":
    let tempShips=state.data.shipIdArray;
    if(action.action==="add") tempShips.push(action.newData)
    else if(action.action==="remove"){
      tempShips=tempShips.filter(ship=>{
        if(ship._id===action.newData) return false;
        else return true;
      })
      console.log(tempShips);
      
    }

    let tempData=state.data;
    tempData.shipIdArray=tempShips;
    console.log(tempData);
    
    return{ 
      ...state,
      data:tempData
    }
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};