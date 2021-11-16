import PropTypes from "prop-types";
import Button from "./button";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  // const onClicked = () => {
  //   console.log("On Click event triggered !!");
  // };
  return (
    <header>
      <h1>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          text={props.showAddTaskProp ? "Close" : "Add Task"}
          color={props.showAddTaskProp ? "red" : "green"}
          OnClickedProp={props.onClicked}
        ></Button>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Default value",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
