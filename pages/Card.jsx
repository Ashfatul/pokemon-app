import { useEffect, useState } from "react";

function Card(props) {
  const pokemonInfo = props?.data;
  const [types, settypes] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${pokemonInfo?.id}`)
      .then((response) => response.json())
      .then((res) =>
        settypes(res.damage_relations.double_damage_to.splice(0, 2))
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <a
      href={`/PokemonDetails/${pokemonInfo?.name}`}
      className="singlePokemonDetails"
    >
      <div className="singlePokemon">
        <p className="pokemon-number">#{pokemonInfo?.id}</p>
        <div className="pokemon-img-container">
          <img src={pokemonInfo?.image} className="pokemonImg" alt="" />
        </div>
        <p className="pokemonName">{pokemonInfo?.name}</p>
        <div className="pokemonPowerContainer">
          {types.map((type) => (
            <p key={type?.name}>{type?.name}</p>
          ))}
        </div>
      </div>
    </a>
  );
}
export default Card;
