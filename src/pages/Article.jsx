import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Article() {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  useEffect(() => {
    fetch(`https://demo-api-one.vercel.app/api/articles/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticle(data.body);
      });
  }, []);

  return (
    <div className="container">
      <h1>{article.name}</h1>
      <img src={article.imageUrl} />
      <h3>{article.description}</h3>
      <p>{article.text}</p>
    </div>
  );
}
