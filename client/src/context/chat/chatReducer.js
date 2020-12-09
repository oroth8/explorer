export default (state, action) => {
  let temp="";
  switch (action.type) {
    case "LOGIN_MESSAGE":      
      temp=state.messageState;
      temp+=action.payload+"\n"
      return {
        ...state,
        messageState: `${temp}`,
      };
    case "USER_MESSAGE":
//      localStorage.setItem("token", action.payload.token);
      temp=state.messageState;
      temp+=action.payload+"\n"
      return {
        ...state,
        messageState: `${temp}`,
      };
    default:
      return state;
  }
};
