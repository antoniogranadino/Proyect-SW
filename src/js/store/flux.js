const apiUrl = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
    },
    actions: {
      getPeople: async () => {
        const response = await fetch(`${apiUrl}/people`);
        const data = await response.json();
        console.log(data.results);

        let characters = [];
        for (let item of data.results) {
          const characterResponse = await fetch(item.url);
          const characterData = await characterResponse.json();
          characters.push(characterData.result);
        }
        setStore({ characters: characters });
        console.log(characters);
      },

      getPlanets: async () => {
        const response = await fetch(`${apiUrl}/planets`);
        const data = await response.json();
        console.log(data.results);

        let planets = [];
        for (let item of data.results) {
          const planetsResponse = await fetch(item.url);
          const planetsData = await planetsResponse.json();
          planets.push(planetsData.result);
        }
        setStore({ planets: planets });
      },
    },
  };
};

export default getState;
