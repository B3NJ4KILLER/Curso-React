import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

// const styles = {
//   marginRight: "10px",
//   backgroundColor: "#007bff",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

console.log(styles);
function Button({ children, isLoading, onClick }: Props) {
  const clasName = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.padded,
  ].join(" ");

  return (
    <button
      // style={styles}
      onClick={onClick}
      disabled={isLoading}
      type="button"
      // className={[styles.button, styles.padded].join(" ")}
      // className={[
      //   `btn btn-${isLoading ? "secondary" : "primary"}`,
      //   styles.padded,
      // ].join(" ")}
      className={clasName}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
