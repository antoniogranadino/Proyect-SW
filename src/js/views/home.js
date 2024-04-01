import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const [saveFavoritesCharacters, setSaveFavoritesCharacters] = useState([]);

  const [saveFavoritesPlanets, setSaveFavoritesPlanets] = useState([]);

  const addCharacters = (characters) => {
    setSaveFavoritesCharacters([...saveFavoritesCharacters, characters]);
  };

  const renderFavCharacters = saveFavoritesCharacters.map((name) => (
    <li>{name}</li>
  ));

  const addPlanets = (planets) => {
    setSaveFavoritesPlanets([...saveFavoritesPlanets, planets]);
  };

  const renderFavPlanets = saveFavoritesPlanets.map((name) => <li>{name}</li>);

  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <span className="navbar-brand m-3 mb-0 h1">Star Wars</span>
        </Link>
        <div className="btn-group me-4">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="dropdown-item" href="#">
              {renderFavCharacters} {renderFavPlanets}
            </li>
          </ul>
        </div>
      </nav>

      <div className="d-people d-flex">
        {store.characters.map((item) => {
          return (
            <div className="w-card border border-light-subtle m-2">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                alt=""
              />
              <div className="m-2">
                <h1>{item.properties.name}</h1>
                <div>
                  <p>
                    <strong>Gender:</strong> {item.properties.gender}
                  </p>
                  <p>
                    <strong>Hair Color:</strong> {item.properties.hair_color}
                  </p>
                  <p>
                    <strong>Eye-Color:</strong> {item.properties.eye_color}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => navigate(`characters/${item.uid}`)}
                    className="btn btn-primary"
                  >
                    Learn more
                  </button>
                  <button
                    onClick={() => {
                      addCharacters(item.properties.name);
                    }}
                    className="btn btn-warning"
                  >
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-planets d-flex">
        {store.planets.map((item) => {
          return (
            <div className="w-card border border-light-subtle m-2">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                alt=""
              />
              <div className="m-2">
                <div>
                  <p>
                    <strong>Population:</strong> {item.properties.population}
                  </p>

                  <p>
                    <strong>Terrain:</strong> {item.properties.terrain}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => navigate(`planets/${item.uid}`)}
                    className="btn btn-primary"
                  >
                    Learn more
                  </button>
                  <button
                    onClick={() => {
                      addPlanets(item.properties.name);
                    }}
                    className="btn btn-warning"
                  >
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
