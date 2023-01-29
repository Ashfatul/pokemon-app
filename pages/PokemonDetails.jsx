export default function PokemonDetails() {
  return (
    <div className="pokemon-details-container">
      <div className="logoContainer">
        <img src="/Logo/Logo.png" alt="" />
      </div>
      <div className="details-area">
        <div className="left-info">
          <h1 className="pokemon-name">Bulbasaur #001</h1>
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
          <img src="https://picsum.photos/475" alt="" />
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
        Back To Home
      </a>
    </div>
  );
}
