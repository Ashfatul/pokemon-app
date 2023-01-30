function Card() {
  return (
    <a href="/details" className="singlePokemonDetails">
      <div className="singlePokemon">
        <p className="pokemon-number">#015</p>
        <div className="pokemon-img-container">
          <img src="https://picsum.photos/215" className="pokemonImg" alt="" />
        </div>
        <p className="pokemonName">Google</p>
        <div className="pokemonPowerContainer">
          <p>Fire</p>
          <p>Water</p>
        </div>
      </div>
    </a>
  );
}
export default Card;
