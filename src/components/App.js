import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";


const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project")
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
        setLoading(false);
      });
  }
  
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  }

  if(loading) {
    return <Loading />;
  }

  if(tours.length === 0){
    return (
      <main>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}


export default App;
