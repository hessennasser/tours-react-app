import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [IsLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)
  }

  const getTours = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json()
      setTours(tours);
      console.log(tours);
    }
    catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getTours(url)
  }, [])

  if (IsLoading) {
    return <Loading />
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" onClick={() => getTours(url)} className="btn" style={{ marginTop: "2rem" }}>show all tours</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );

};
export default App;
