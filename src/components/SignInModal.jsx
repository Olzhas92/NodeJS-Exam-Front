import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./SignInModal.module.css";

const SignInModal = (props) => {
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchData = async () => {
    try {
      console.log(`email: ${email}, password: ${password}`);
      const res = await fetch("http://localhost:7001", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ id: Math.random(), email, password }),
      });
      if (!res.ok) {
        setError("Something went wrong");
      }
      //   const data = await res.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    fetchData();
    setEmail("");
    setPassword("");
  };

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={props.closeModal}></div>
      <div className={styles.content}>
        <h2 className={styles.signin}>Sign In</h2>
        {/* <form className={styles.form} onSubmit={submitData}>
          <input
            required
            type="email"
            placeholder="email"
            className={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            required
            type="password"
            placeholder="password"
            className={styles.input}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className={styles.submitBtn}>
            Sign In
          </button>
        </form> */}

        <input
          required
          type="email"
          placeholder="email"
          className={styles.input}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          required
          type="password"
          placeholder="password"
          className={styles.input}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className={styles.submitBtn} onClick={submitData}>
          Sign In
        </button>

        <h2 className={styles.signup}>Not Signed Up?</h2>
      </div>
    </div>,
    document.getElementById("sign-in")
  );
};

export default SignInModal;
