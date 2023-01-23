import { Link } from "react-router-dom";

export default function Card({ image, title, id }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <Link to={`/article/${id}`}>{title}</Link>
      </div>
    </div>
  );
}
