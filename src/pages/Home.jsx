import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data.body);
      });
  }, []);
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
