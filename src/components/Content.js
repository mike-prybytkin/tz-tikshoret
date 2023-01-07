import OrderButton from "./OrderButton";

function Content() {
  return (
    <main>
      <div className="wrapper main-wrapper  layout-2-column">
        <div className="articles-wrapper">
          <article className="article">
            <p className="article__pre-title">
              <span>NOTICIA</span> | <span>REPRETEL</span>
            </p>
            <h1 className="article__heading">
              La fuga del cartel a un convento por un producto inventado y el
              rejuvenecimiento milagroso de todas sus hermanas.
            </h1>
            <div className="article__info">
              <a
                className="link article__autor"
                href="https://www.prensa.com/autor/Aleida%20Samaniego/"
              >
                Blanca Herrera
              </a>
              <p className="article__date">09 dic 2022 - 08:04 AM</p>
            </div>
            <div className="article__sponsore">
              <span>Gialuron</span>
              <a
                className="link"
                href="https://www.prensa.com/buenas-practicas/#trust"
              >
                <img
                  src="./assets/article/trust-logo.svg"
                  alt="the trust project"
                />
              </a>
            </div>
            <div className="article__themes">
              <span>TEMAS:</span>
              <a className="link" href="https://www.prensa.com/tema/panama/">
                Panamá
              </a>
            </div>
            <div className="article__main-img">
              <img src="./assets/article/victim.webp" alt="victim" />
            </div>
            <div className="article__content interwiew">
              <p className="interwiew__description">
                Qué producto inventó Mónica, por qué se escondió de la mafia,
                qué tenía que ver con el negocio farmacéutico, cómo acabó en un
                convento del sur del país y el milagro de rejuvenecimiento que
                ocurrió con las monjas, lo descubrirás en este artículo.
              </p>
              <p>
                <span className="interwiew__person">Blanca Herrera:</span>¿Qué
                pasó después?
              </p>
              <p>
                <span className="interwiew__person">Hermana Mónica:</span>
                Una semana después, cuando volvía a casa del trabajo, creí que
                me perseguía un minibús negro de la marca Mercedes.
                <br /><br />
                Cuando llegué a casa, encontré la puerta abierta. Me asusté y
                quise huir, pero dos hombres se acercaron por detrás y me
                exigieron que entrara al apartamento. Otros dos hombres ya
                estaban allí. Me agarraron y... todavía me resulta difícil
                hablar de ello, lo siento... (llorando) ...me golpearon y
                violaron.
              </p>
              <p>
                <span className="interwiew__person">Blanca Herrera:</span>
                ¡Qué horror! ¿Has averiguado quién era?
              </p>
              <p>
                <span className="interwiew__person">Hermana Mónica:</span>
                Sí, uno de los atacantes me gritó diciendo: "¡¿Quieres acabar en
                una zanja con la boca cosida y una nota en el bolsillo? ¡Nadie
                se atreve a ir contra el Cártel del Golfo!”
              </p>
            </div>
            <video
              className="interwiew__video"
              src="./assets/article/efir.webm"
              controls
              width="100%"
            >
              Sorry, your browser doesn't support embedded videos...
            </video>
          </article>
          <OrderButton />
        </div>

        <aside className="aside">
          <p>РЕКЛАМА</p>
        </aside>
      </div>
    </main>
  );
}

export default Content;
