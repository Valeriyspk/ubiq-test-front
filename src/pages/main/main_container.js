import { connect } from "react-redux";

import { makeGetIsLogedIn } from "../../api/reducer";

import Main from "./main";

const mapStateToProps = () => {
  const getIsLogedIn = makeGetIsLogedIn();
  return state => ({
    isLogedIn: getIsLogedIn(state)
  });
};

export default connect(mapStateToProps)(Main);
