import React, { Fragment, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const inputVal = useRef();
  const dispatch = useDispatch();

  const counterVal = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "Increment", val: inputVal.current.value });
  };

  const decrementHandler = () => {
    dispatch({ type: "Decrement", val: inputVal.current.value });
  };

  return (
    <Fragment>
      <br />
      <div className="row">
        <div className="col-auto">
          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group" role="group" aria-label="First group">
              <input type="number" ref={inputVal} className="form-control" />
            </div>
            &nbsp;&nbsp;
            <div class="btn-group" role="group" aria-label="Second group">
              <button
                type="button"
                class="btn btn-success"
                onClick={decrementHandler}
              >
                <span style={{ color: "black" }}>-</span>
              </button>
            </div>
            &nbsp;&nbsp;
            <div class="btn-group" role="group" aria-label="Third group">
              <button
                type="button"
                class="btn btn-success"
                onClick={incrementHandler}
              >
                <span style={{ color: "black" }}>+</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <span class="badge rounded-pill text-bg-success">
            <strong style={{ color: "red" }}> {counterVal} </strong>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
