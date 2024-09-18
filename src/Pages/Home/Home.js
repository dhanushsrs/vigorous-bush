import React, { useEffect, useState } from "react";
import "./Home.css";
import SearchBar from "../../Component/SearchBar/SearchBar";

const Home = () => {
  const [userApi, setUserApi] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setUserApi(data);
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-container">
      <SearchBar />
      <h1>Blog List</h1>
      <ul>
        {userApi.map((eachData) => (
          <div className="list-container">
            <li key={eachData.id}>TITLE: {eachData.title}</li>
            <li key={eachData.id}> BODY: {eachData.body} </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
