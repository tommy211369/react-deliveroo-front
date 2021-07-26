import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SousHeader from "./components/SousHeader";
import Categories from "./components/Categories";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import axios from "axios";
library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");
      setData(response.data);
      console.log(data);
      setIsLoading(false);
    };

    fetchData();
  });

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div>
      <Header />
      <SousHeader data={data} />

      <div className="wrapper">
        <Categories data={data} />
      </div>
    </div>
  );
}

export default App;
