import "./button.styles.css";

const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    google: "google",
    addToList: "add-to-list-btn",
    deleteBtn: "delete-btn",
    searchBtn: "search-btn",
  };

  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
