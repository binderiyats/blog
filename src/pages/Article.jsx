import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Article() {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  useEffect(() => {
    axios(`http://localhost:8000/articles/${id}`).then((res) => {
      setArticle(res.data);
    });
    // fetch(`https://localhost:8000/articles/${id}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setArticle(data);
    //   });
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
