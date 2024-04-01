import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
const Detail = () => {
  const params = useParams();
  console.log(params);

  const { store } = useContext(Context);

  const [search, setSearch] = useState({});

  const details = () => {
    if (params.nature == "characters") {
      const searchFind = store.characters.find((item) => item.uid == params.id);
      console.log(searchFind);
      setSearch(searchFind);
    } else if (params.nature == "planets") {
      const searchFind = store.planets.find((item) => item.uid == params.id);
      setSearch(searchFind);
    }
  };

  useEffect(() => {
    details();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between m-4">
        <img
          src={`https://starwars-visualguide.com/assets/img/${params.nature}/${search?.uid}.jpg`}
          alt=""
          width="300px"
        />
        <div className="m-4">
          <h1>{search?.properties?.name}</h1>
          <p className="lh-base">{search?.description}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center grid gap-4 my-4">
        {params.nature == "planets" ? (
          <>
            <p>
              <strong>Name:</strong>
              {search?.properties?.name}
            </p>
            <p>
              <strong>Climate:</strong> {search?.properties?.climate}
            </p>
            <p>
              <strong>Population:</strong> {search?.properties?.population}
            </p>
            <p>
              <strong>Orbital Period:</strong>{" "}
              {search?.properties?.orbital_period}
            </p>
            <p>
              <strong>Rotation Period:</strong>{" "}
              {search?.properties?.rotation_period}
            </p>
            <p>
              <strong>Diameter</strong> {search?.properties?.diameter}
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {search?.properties?.name}
            </p>
            <p>
              <strong>Birth Year:</strong> {search?.properties?.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {search?.properties?.gender}
            </p>
            <p>
              <strong>Height:</strong> {search?.properties?.height}
            </p>
            <p>
              <strong>Skin Color:</strong> {search?.properties?.skin_color}
            </p>
            <p>
              <strong>Eye Color:</strong> {search?.properties?.eye_color}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Detail;
