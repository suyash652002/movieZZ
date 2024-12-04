import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { CgPlayButtonO } from "react-icons/cg";
import { CiBookmarkPlus } from "react-icons/ci";
import Popular from './Popular'
import TopRated from './TopRated';
import Upcoming from './Upcoming';


const apiKey = 'b60537f84a00d8fdb7b8c7ac189ce792';
const url = `https://api.themoviedb.org/3/`;
const imgUrl = 'https://image.tmdb.org/t/p/w500'
const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false);
    const [popularData, setPopularData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setloading(true);
            const response = await fetch(`${url}trending/movie/day?language=en-US&api_key=${apiKey}`);
            if (!response.ok) {
                setloading(true);
                setError(true);
                return;
            }
            const data = await response.json();
            console.log(data);
            setData(data.results || []);
            setloading(false);
            setError(false);
        }


        fetchApi();


    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    // Slick carousel settings
    const settings = {
        dots: true,          // Show navigation dots
        infinite: true,      // Infinite looping
        speed: 500,          // Transition speed
        slidesToShow: 1,     // Display 1 image at a time
        slidesToScroll: 1,   // Scroll 1 image at a time
        autoplay: true,      // Enable autoplay
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        arrows: false,
        dots: false
    };

    return (
        <>
            {error && !loading && (
                <div className="text-red-500">Error fetching data. Please try again later.</div>
            )}

            {!error && !loading && data.length === 0 && (
                <div>No results found</div>
            )}

            <div className="carousel-container bg-black relative w-full">
                <Slider {...settings}>
                    {/* Map through your data and render the content */}
                    {data.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Render the title or other content in a more structured way */}
                            <div className="absolute top-[300px] left-[10px] lg:top-[420px] lg:left-[100px] z-10 bg-black bg-opacity-70 w-[90vw] lg:w-[70vw] text-xs lg:text-lg p-4 rounded-lg">
                                <div>
                                    <p className='text-white '>Title - {item.title}</p>
                                    <p className='text-gray-400'>{item.overview}</p>
                                </div>
                                <div className='text-white flex justify-between mt-2'>
                                    <button className='flex items-center gap-2 px-3 py-1 bg-purple-900 rounded-full'>Watch Later <CgPlayButtonO className='lg:mt-1' /></button>
                                    <button className='flex items-center gap-2 px-3 py-1 bg-purple-900 rounded-full'>Add to favourites <CiBookmarkPlus className='lg:mt-1' /></button>
                                </div>
                            </div>

                            {/* Image Slider */}
                            <img
                                src={`${imgUrl}${item.poster_path}`}
                                alt={`Image ${index}`}
                                className="w-[100vw] h-[60vh] lg:h-[90vh] lg:mx-auto rounded-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div>
                <Popular />
                <TopRated />
                <Upcoming />
            </div>

        </>
    );
}

export default Home;
