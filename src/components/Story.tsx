import { STORY_POINTS } from "../content";
import { BikeWheel, CukoBowl } from "./Illustrations";

export default function Story() {
  return (
    <section className="section section--red" id="cerita">
      <BikeWheel className="story__wheel" />
      <div className="container story">
        <div className="story__intro reveal">
          <span className="eyebrow eyebrow--light">Cerita kami</span>
          <h2>Cerita di balik sepeda ini</h2>
          <p>
            Awalnya hanya sepeda sederhana yang berkeliling dari gang ke gang. Dengan resep turun-temurun dan ikan pilihan,
            kami ingin membuktikan bahwa usaha kecil bisa punya rasa besar.
          </p>
          <blockquote className="story__quote">
            <CukoBowl className="story__quote-icon" />
            “Makanan enak bisa menyatukan keluarga, teman, dan tetangga.”
          </blockquote>
        </div>
        <ol className="story__timeline">
          {STORY_POINTS.map((point, index) => (
            <li className="reveal" key={point.title}>
              <span className="story__dot">{index + 1}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
