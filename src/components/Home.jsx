/* eslint-disable no-unused-vars */
import { React } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { articles } from "../articlesData";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchParams(value ? { search: value } : {});
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Articles</h1>
      <input
        type="text"
        placeholder="Search articles"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
