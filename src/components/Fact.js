import React from "react";
import { connect } from "react-redux";
import { getFact } from "../store/actions/actions";

export const Fact = (props) => {
  if (props.isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <p>{props.fact}</p>
      <button onClick={props.getFact}>Get new fact</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { fact: state.fact };
};

const mapDispatchToProps = { getFact };

export default connect(mapStateToProps, mapDispatchToProps)(Fact);
