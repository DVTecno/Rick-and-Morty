export const API_RM = {
  URL: "https://rickandmortyapi.com/api",
  CHARACTERS: function () {
    return `${this.URL}/character`;
  },
  CHARACTERS_BY_PAGE: function (page) {
    return `${this.URL}/character?page=${page}`;
  },
  CHARACTERS_BY_ID: function (id) {
    return `${this.URL}/character/${id}`;
  },
  CHARACTERS_BY_NAME: function (name) {
    return `${this.URL}/character/?name=${name}`;
  }
 
};
