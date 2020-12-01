export default (state, action) => {
  console.log('action');
  console.log(action);
  
  switch (action.type) {
  case "UPDATE_CHARACTER":
    return{
      ...state,
      ...action.char,
      loaded:true
    }
  case "LOADING":
    return{
      ...state,
      loaded:false
    };
    case "ERROR_NO_CHARACTER":
      return{
        ...state,
        missing:true
      }
  case "UPDATE_PORTRAIT":
    return{
      ...state,
      characterImage:action.url,
      loaded:true
    };

  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};