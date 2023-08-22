import react from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
 
  const submitHandler = () => {}

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/people');
  }
  return (
    <form onSubmit={submitHandler}>
      <center>
        <label>
          <strong style={{ color: "green" }}>Enter your thoughts.</strong>
        </label>
        <input className="form-control" type="text"></input>
        <br/>
        <button className="btn btn-success" onClick={navigateHandler}>
          Click here navigate to People page with useNavigate.
        </button>
      </center>
    </form>
  );
};

export default UserForm;
