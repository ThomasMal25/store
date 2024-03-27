import { useEffect, useState } from 'react';
import Store from './components/Store';
import './App.css';
import Cart from './components/Cart';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {data.length > 0 ? <Store data={data} /> : <></>}
      <h1 className="text-3xl bg-[#1da1f2] font-bold underline">
        Hello world!
      </h1>
    </>
  );
}

export default App;
