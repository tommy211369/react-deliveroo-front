import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SousHeader from "./components/SousHeader";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";
import axios from "axios";
library.add(faStar, faPlusCircle, faMinusCircle, faShoppingCart);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState({ meals: {}, idList: [] });
  const [displayCart, setDisplayCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://react-deliveroo-project.herokuapp.com/"
        );
        // http://localhost:3200/
        // "https://react-deliveroo-project.herokuapp.com/";

        // remove empty categories
        const DATA = response.data.categories.splice(
          response.data.categories.length - 6
        );
        console.log("Removed datas : ", DATA);

        // data updated
        setData(response.data);
        console.log("data : ", data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.messages);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading">
      <CircularProgress />
      <span>Récupération des données...</span>
    </div>
  ) : (
    <div>
      <Header
        cart={cart}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        setCart={setCart}
      />
      <SousHeader data={data} />

      <div className="wrapper">
        <Categories data={data} cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
