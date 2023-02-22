import { useEffect, React, useState } from "react";
import axios from "axios";
import Slider from "../Components/Slider";
import CardList from "../Components/CardList";
import Pagination from "../Components/Pagination";
import "../css/homePage.css";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  console.log(posts);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&apiKey=f39df38a504545878f59b6d6e7a39aa7"
      )
      .then(function (response) {
        setPosts(response.data.articles);
      });
  }, [refresh]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentNews = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container mt-5">
      <div className="row">
        <Slider post={posts} />
      </div>
      <div className="grid-container">
        <div className="cardİtem">
          <CardList postData={currentNews} />
        </div>
      </div>
      <div className="mt-3 ">
        <Pagination
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default HomePage;
