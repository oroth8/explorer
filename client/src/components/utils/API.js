import axios from "axios"

export async function getNewCharacterPortrait(){
    return axios.get("https://randomuser.me/api/?inc=picture");
}
export async function saveCharacter(characterObj){
    return axios.post("/api/character/create",characterObj); 
}