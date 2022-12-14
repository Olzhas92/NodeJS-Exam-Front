import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import NavPages from "../components/NavPages";
import styles from "./Home.module.css";

const Home = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState();

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:7001");
      if (!res.ok) {
        setError("Something went wrong");
      }
      const data = await res.json();
      setArr(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.home}>
      <nav className={styles.navbar}>
        <NavPages />
        <div styles={styles.buttons}>
          {isLogin && <h2>{email}</h2>}
          {!isLogin && <Button>Sign In</Button>}
        </div>
      </nav>
      {!isLoading && arr.map((item) => <p key={item.id}>{item.name}</p>)}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Home;
