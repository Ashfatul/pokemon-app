import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function PokemonDetails() {
  let PokemonName = useRouter();
  PokemonName = PokemonName.query.PokemonName;

  const [pokemonDetails, setpokemonDetails] = useState([]);

  // useEffect(() => {
  const Query = `query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        abilities {
          ability {
            name
          }
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
        message
        status
      }
    }`;

  const name = {
    name: PokemonName,
  };

  fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: Query,
      variables: name,
    }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => setpokemonDetails(res));

  return (
    <div className="pokemon-details-container">
      <div className="logoContainer">
        <img src="/Logo/Logo.png" alt="" />
      </div>
      <div className="details-area">
        <div className="left-info">
          <h1 className="pokemon-name">
            {pokemonDetails.data?.pokemon.name}
            {" #"}
            {pokemonDetails.data?.pokemon.id}
          </h1>
          <p className="pokemon-details">
            There is a plant seed on its back right from the day this Pokémon is
            born. The seed slowly grows larger.
          </p>
          <div className="other-details">
            <table className="details-table">
              <tbody>
                <tr>
                  <td>
                    <div className="details-type">Height</div>
                    <div className="details-value">2'-0"</div>
                  </td>
                  <td>
                    <div className="details-type">Category</div>
                    <div className="details-value">Seed</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details-type">Weight</div>
                    <div className="details-value">50 lbs"</div>
                  </td>
                  <td>
                    <div className="details-type">Abilities</div>
                    <div className="details-value">Grow</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="photo">
          <img src={pokemonDetails.data?.pokemon?.image} alt="" />
        </div>

        <div className="right-info">
          <div className="type-details">
            <h4 className="power-title">Types</h4>
            <div className="power-list-container">
              <p className="power">Grass</p>
              <p className="power">Poison</p>
            </div>
          </div>

          <div className="weekness-details">
            <h4 className="weekness-title">Weaknesses</h4>
            <div className="power-list-container">
              <p className="weekness">Grass</p>
              <p className="weekness">Poison</p>
              <p className="weekness">Grass</p>
              <p className="weekness">Poison</p>
            </div>
          </div>

          <div className="stats">
            <h4 className="stats-title">Stats</h4>
            <br />
            <div className="stats-list-container">
              <div className="single-stats">
                <div className="progress-topic">HP</div>
                <div className="progess-bar"></div>
              </div>

              <div className="single-stats">
                <div className="progress-topic">HP</div>
                <div className="progess-bar"></div>
              </div>

              <div className="single-stats">
                <div className="progress-topic">HP</div>
                <div className="progess-bar"></div>
              </div>

              <div className="single-stats">
                <div className="progress-topic">HP</div>
                <div className="progess-bar"></div>
              </div>

              <div className="single-stats">
                <div className="progress-topic">HP</div>
                <div className="progess-bar"></div>
              </div>

              <div className="single-stats">
                <div className="progress-topic">HP</div>
                <div className="progess-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/" className="back-to-home">
        <FontAwesomeIcon icon={faHome} />
        <span>Back To Home</span>
      </a>
    </div>
  );
}
