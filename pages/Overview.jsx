import Card from "./Card";
import PokemonDetails from "./PokemonDetails/[PokemonID]";
import Script from "next/script";
export default function Overview() {
  return (
    <>
      <div className="texture">
        <div className="overviewContainer">
          <div className="logoContainer">
            <img src="/Logo/Logo.png" alt="" />
          </div>
          <div className="cardContainer">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <div className="blogContainer">
        <h2 className="blogTitle">
          Ash & Pikachu Arrive in <br /> Pokémon Universe
        </h2>

        <div className="blog-grid-container">
          <div className="blog-text text-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque
            perspiciatis repudiandae consectetur, non incidunt eveniet rerum
            perferendis nihil porro doloribus, ab modi dolorem! Ex magnam est
            fugiat omnis quasi quaerat ut nihil libero asperiores fugit, debitis
            aspernatur, assumenda dolorum delectus minus quisquam adipisci
            recusandae voluptate, laborum tenetur. Beatae, commodi.
          </div>
          <div className="blog-text text-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus doloribus architecto aspernatur impedit cupiditate
            voluptates adipisci a totam, exercitationem numquam id quis dolorem
            incidunt corporis obcaecati earum distinctio nam inventore possimus
            alias non ullam ea iusto dignissimos. Laborum, culpa placeat!
          </div>
          <div className="blog-text text-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet
            praesentium voluptate consectetur, architecto ad aliquam quidem
            soluta ullam dicta exercitationem nam excepturi natus, numquam
            laboriosam? Molestiae iusto culpa quo,
          </div>
          <div className="blog-text text-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet
            praesentium voluptate consectetur, architecto ad aliquam quidem
            soluta ullam dicta exercitationem nam excepturi natus, numquam
            laboriosam?
          </div>
          <div className="blog-text text-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            doloribus esse hic aspernatur possimus mollitia, quia labore
            voluptatibus nesciunt praesentium consequuntur quos accusamus!
            Debitis consequuntur similique a consectetur, architecto ad aliquam
            quidem soluta ullam
          </div>
          <div className="blog-text text-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet
            praesentium voluptate consectetur, architecto ad aliquam quidem
            soluta ullam dicta exercitationem nam excepturi natus, numquam
            laboriosam?
          </div>
          <div className="blog-text text-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            excepturi vel voluptatem earum fugiat incidunt fugit hic
            exercitationem dicta sint! Eum, quam perferendis eligendi blanditiis
            rem accusamus odit quia consequuntur repudiandae, explicabo
            consequatur sed eveniet obcaecati ipsa voluptatum, esse fugiat error
            rerum quis quas pariatur. Laboriosam nihil voluptatem, alias illum
            dolores quia quisquam rerum voluptates deserunt eaque aperiam
            molestiae, provident libero illo vero aspernatur quam laborum
            facilis consequatur temporibus! Eius adipisci placeat, reiciendis
            ipsam error perferendis facilis quasi fugit deleniti eligendi
            numquam ad minima hic reprehenderit officia maxime vel mollitia, quo
            explicabo deserunt? Asperiores quibusdam illum, inventore
            reprehenderit
          </div>
          <div className="blog-text text-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam
            quia aspernatur! Fugiat harum ad vel mollitia iusto sunt unde
            consectetur at, saepe commodi asperiores earum, quam quia recusandae
            laborum rerum rem quisquam magni! Saepe porro quis possimus
            blanditiis error sit quas. Tempore optio nisi quis distinctio!
            Nulla, unde non!
          </div>

          <div className="img-1-4">
            <div className="blog-img img-1">
              <img src="/Image03.png" alt="" />
            </div>

            <div className="blog-img img-4">
              <img src="/Image02.png" alt="" />
            </div>
          </div>

          <div className="blog-img img-2">
            <img src="/Image04.png" alt="" />
          </div>
          <div className="blog-img img-3">
            <img src="/Image05.png" alt="" />
          </div>
          <div className="blog-img img-5">
            <img src="/Image01.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
