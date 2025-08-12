import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      if(response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setTours(data);
    } catch (error){
      console.log("Fetch Error: ", error);
      setTours([]);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  }

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0){
    return (
      <main style={{ padding: '2rem', textAlign: 'center'}}>
        <h2>No Tours left</h2>
        <button onClick={fetchTours} style={styles.refreshBtn}>
          Refresh
        </button>
      </main>
    )
  }

  const styles = {
    refreshBtn: {
      padding: '0.6rem 1rem',
      background: '#0d6efd',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }
  }
}


export default App;
