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

export function getQuizCategories(){
    return axios.get("/api/questions/category")
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
export async function loadCharacter(userId){
    return axios.get("/api/character/load/"+userId); 
}

export async function loadShips(){
    return axios.get("/api/ship/loadAll"); 
}
