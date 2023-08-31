import { API_RM } from "../constants/Api.constants";

class RickAndMortyService {
  async getAllCharacter() {
    const response = await fetch(API_RM.CHARACTERS());
    //Interceptor
    return response.json();
  }
  //buscar por pagina

  async getAllCharacters(page) {
    const response = await fetch(API_RM.CHARACTERS_BY_PAGE(page));
    console.log(response);
    return response.json();
  }

  async getCharacterById(id) {
    const response = await fetch(API_RM.CHARACTERS_BY_ID(id));
    //Interceptor
    return response.json();
  }
  async getCharacterByName(name) {
    const response = await fetch(API_RM.CHARACTERS_BY_NAME(name));
    //Interceptor
    return response.json();
  }
 
}
export default new RickAndMortyService();
