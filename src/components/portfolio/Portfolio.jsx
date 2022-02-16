import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="right">
        <img className="img_porte" src="assets/img_portefolio.png" alt="" />
        <p className="p_portefolio h1">Je crée de la valeur</p>

        <p className="p_portefolio h1">par la conception</p>
      </div>
      <div className="left">
        <p className="p_portefolio h2">
          Je m'appelle Christopher, mais tu peux m'appeler Chris.
        </p>
        <p className="p14px">
          Née en France le 17 Février 1998 à Montereau Fault Yonne. Je suis fière
          de vous présenté mon porte folio réaliser en React. Avant d'être
          <b> intégrateur Web et Mobile</b> j'était dans la pâtisserie, oui
          j'était le petit chef qui faisait vaut gâteaux pour les anniversaires
          , les buches de noël ainsi que vos petits déjeuners.
        </p>
        <p className="p_portefolio">
          J'ai toujours eut cette part de <b> créativité en moi</b> et je suis
          exaltant à la programmation , voilà pourquoi j'ai choisie cette
          filière aujourd'hui. Ce qui me passionne le plus dans ce métier c'est
          qu'à partir de quelques idées, une poignée de motivation et
          <b> un travail d'équipe</b>. Il est possible de réaliser des sites web
          et des applications mobiles. Pour moi une application réussite, c'est
          une idée qui à été emmenée au bout peut importe les problèmes
          rencontrés, mais surtout une application interactive avec les
          utilisateurs. Pour cela j'apprend touts les jours, je continue de me
          former et je ne reste pas sur mes acquis. La plus grande qualité d'un
          développeur à mon sens c'est la curiosité. Une personne curieuse est
          amener à en apprendre d'avantage ainsi de pouvoir évoluer dans ça façon
          de travailler.
        </p>
        <p className="p_portefolio">
          De mon cotés je m'éfforce de créer des projets perso, de repousser mes
          limites et d'aboutir mes idées jusqu'au bout. Ces projets doivent être de
          plus en plus raffinés et surprendre les utilisateurs.
        </p>
        <p className="p_portefolio">
          Merci d'avoir pris le temp de me lire, j'espère pouvoir répondre à vos
          futurs besoins.
        </p>
        <p className="h4">VOUS AVEZ UN PROJET INTERESSANT ? ALORS PARLONS EN !</p>
      </div>
    </div>
  );
}
