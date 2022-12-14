import React, { useState } from "react";
import styles from "./Button.module.css";
import SignInModal from "./SignInModal";

const Button = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className={styles.btn}
        onClick={() => {
          setShowModal(true);
          console.log("clicked");
        }}
      >
        {props.children}
      </button>
      {showModal && (
        <SignInModal
          show={showModal}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Button;
