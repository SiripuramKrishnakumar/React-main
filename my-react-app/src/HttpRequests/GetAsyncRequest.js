import React, { useCallback, useEffect, useState } from "react";

const GetAsyncRequest = () => {
  const [persons, setPeople] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.py4e.com/api/people/", {
        method: "Get",
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      //throw new Error('Example Error.');
      setPeople(
        data.results.map((person) => {
          return { id: Math.random(), name: person.name };
        })
      );
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // Post call

  // const submitData = async () => {
  //   var response = await fetch("someUrl",{
  //     method: 'POST',
  //     body: JSON.stringify({"someObject" : 1}),
  //     headers:{
  //       "key":"value",
  //       "Content-Type":"application/json"
  //     }
  //   });

  //   var data = response.json();
  //   console.log(data);
  // }

  return (
    <React.Fragment>
      <center>
      <h2 style={{color:'green'}}>Asynchronous Request with Use Effect Example.</h2>
        <div>
          <button className="btn btn-success" onClick={fetchMoviesHandler}>
            People List
          </button>
        </div>
        <br />
        {persons.length > 0 && (
          <div className="card" style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush">
              {persons.map((person) => {
                return <li className="list-group-item">{person.name}</li>;
              })}
            </ul>
            <div className="card-footer">
              <button className="btn btn-success" onClick={() => setPeople([])}>
                Clear
              </button>
            </div>
          </div>
        )}
      </center>
    </React.Fragment>
  );
};

export default GetAsyncRequest;
