/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../articlesData";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Link to="/">Back to Articles</Link>
    </div>
  );
};

export default Article;
