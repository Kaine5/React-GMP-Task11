import styles from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <div className={styles["modal__background"]}>
      <div className={styles["modal__container"]}>
        <button
          className="modal__closeButton"
          onClick={() => props.setOpen(false)}
        >
          X
        </button>
        <div className="modal__content">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
