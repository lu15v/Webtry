import React from "react";

import "../styles/poem-view.css";

const PoemView = () => {
  return (
    <div className="container poem-view-container">
      <div className="poem-header">
        <div className="webtry-title-container">
          <div className="webtry-title">
            <h1>Webtry.</h1>
          </div>
        </div>
        <div className="poem-title-container">
          <div className="poem-title">
            <h1>demo poema</h1>
          </div>
        </div>
      </div>
      <div className="panel-left"></div>
      <div className="poem-body-container">
        <div className="poem-body">
          <p>
          {`Te dejo en libertad, no porque yo quiera hacerlo, sino porque tú así lo has decidido.

Te dejo en libertad, porque tu me has dejado a la deriva, en el barco que en el que solíamos viajar juntos.

Te dejo en libertad, como esperanza de que mi dolor sane en algún punto o al menos, que aprenda a vivir con el.

Te dejo en libertad, porque preferiste irte a estar con la persona que siempre estuvo a tu lado cuando más necesitabas a alguien.

Te dejo en libertad, porque no supiste valorarme, porque luche por ti como nadie jamás lo hará.

Te dejo en libertad, porque tú eres alguien que no conozco, alguien completamente diferente.

Te dejo en libertad, porque estoy profundamente cansado y triste.

Te dejo con todo el dolor de mi corazón en libertad, porque la niña que solía reír conmigo, ha muerto y aún no termino de llorar por mi pérdida.

Te dejo con todo el dolor de mi ser, en libertad, porque la persona que me amaba, que me quería a su lado. Ya no existe más y no pude revivirla.`}

          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemView;
