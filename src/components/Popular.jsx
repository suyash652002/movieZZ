import React, { useEffect } from 'react';
import { useState } from 'react';
const url = 'https://api.themoviedb.org/3/';
const apiKey = 'b60537f84a00d8fdb7b8c7ac189ce792';
const imgUrl = 'https://image.tmdb.org/t/p/w300'
import { motion } from 'framer-motion';



const Cards = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}
      className='w-[100px]  lg:w-[250px]  lg:m-2  flex-shrink-0 lg:text-md '>
      <img src={props.path} alt="popular movies" className='rounded-lg' />
    </motion.div>
  );
}
const Popular = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const response = await fetch(`${url}movie/popular?language=en-US&page=1&api_key=${apiKey}`)
      if (!response.ok) {
        setLoading(false);
        setError(true);
        return;
      }
      const data = await response.json();
      setData(data.results || []);
      setLoading(false);
      setError(false);
      console.log(data.results);
    }
    fetchApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {error && !loading && <div className='text-center'>Error fetching data</div>}
      {!error && !loading && data.length === 0 && (<div>No data found</div>)}
      <div className=' bg-black h-[250px] lg:h-[500px]'>

        <h1 className='text-white font-bold lg:text-4xl text-center p-3'>Popular Movies</h1>
        <div className='flex overflow-x-auto flex-nowrap scroll-smooth h-[100%] '>
          {
            data.map((item, index) => (
              <Cards key={index} path={`${imgUrl}${item.poster_path}`} />
            ))
          }

        </div>
      </div>
    </>
  );
}

export default Popular;
