import axios from "axios"

export async function getNewCharacterPortrait(){
    return axios.get("https://randomuser.me/api/?inc=picture");
}
export async function saveCharacter(characterObj){
    return axios.post("/api/character/create",characterObj); 
}

export function getQuizQuestions(){
    return axios.get("/api/questions")
}

// export default {
//     getNewCharacterPortrait: async function() {
//         return axios.get("https://randomuser.me/api/?inc=picture");
//     },
//     saveCharacter: async function(characterObj) {
//         return axios.post("/api/character/create",characterObj); 
//     },
//     getQuizQuestions: function() {
//         return axios.get("/api/question")
//     }
// }