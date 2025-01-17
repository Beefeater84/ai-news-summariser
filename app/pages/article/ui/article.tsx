import styles from "./article.module.css";

const blocks = [
  "Dominique ja Gisèle Pelicot'n tytär Caroline Darian kertoo The Guardian -lehden haastattelussa uskovansa, että hänen isänsä on huumannut ja raiskannut myös hänet. ",
  "Dominique Pelicot, 72, tuomittiin joulukuussa 20 vuodeksi vankeuteen entisen vaimonsa Gisèle Pelicot’n huumaamisesta, raiskaamisesta ja vaimon raiskausten järjestämisestä kymmenillä muilla miehellä. 50 syytettyä miestä tuomittiin vankeusrangaistuksiin seksuaalirikoksista. Raiskaajina oli kymmenen vuoden aikana ainakin 80 miestä.",

  "Nyt tytär Caroline Darian kertoo laajassa haastattelussa ”musertavasta kaksoistaakasta” olla sekä uhrin että tekijän lapsi, sekä henkisestä kidutuksesta, kun varmuudella ei tiedetä, mitä isä hänelle teki. ",
  "Darian kertoi oikeudenkäynnissä olevansa täysin vakuuttunut, että hänkin on tullut raiskatuksi. – Isä petti minut monella tavalla, Darian sanoo The Guardianille.",

  " Darian, 45, oli toivonut, että isä kertoisi viimeistään oikeudenkäynnissä tyttärelleen totuuden, mutta tunnustusta ei tullut. ",
  "Oikeudenkäynnin aikana tytär huusi usein isälleen ”Sinä valehtelet!”. Darian ei kutsu Dominique Pelicota enää isäkseen. Elämä on täytynyt aloittaa alusta ja pyyhkiä pois menneet muistot. Hän kertoo hävittäneensä kaikki lapsuuden aikaiset valokuvat.",

  "– Mutta miten voit aloittaa alusta, kun isäsi on pahin seksuaalirikollinen vuosikymmeniin, hän kysyy.",

  "Todistuksena vaimon raiskauksista ovat olleet lukuisat videot. ",
  "Poliisi oli saanut palautettua Dominique Pelicot'n tietokoneelta myös poistetun kansion, joka oli nimeltään ”Tyttäreni alasti”. Kansiossa oli kaksi valokuvaa, joissa Darian makaa sängyllä yllään t-paita ja alushousut. ",

  "Darian ei aluksi tunnistanut itseään valokuvista. Hänen mielensä pyrki suojaamaan tätä tapahtuneelta.",
];

export function Article() {
  return (
    <article className={styles.article}>
      <h1>Article</h1>
      {blocks.map((block, index) => (
        <p key={index}>{block}</p>
      ))}
    </article>
  );
}
