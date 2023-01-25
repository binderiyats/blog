import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    let url = "http://localhost:8000/articles";

    if (categoryId) url = `http://localhost:8000/categories/${categoryId}`;
    axios.get(url).then((res) => {
      setArticles(res.data);
    });
  }, [categoryId]);
  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-3 col-sm-6 col-12">
              <Card
                title={article.name}
                image={article.imageUrl}
                id={article.id}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
