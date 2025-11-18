import React, { useEffect, useState } from 'react';
import { fetchWeatherImages } from '../../../constant/index';


const WeatherImageCard = ({ description = 'weather', title = 'Weather' }) => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const urls = await fetchWeatherImages(description);
        setImages(urls);
        setCurrent(0);
      } catch (err) {
        setError('Failed to load images');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [description]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <div className="w-full h-64 bg-surface-700 rounded-lg flex items-center justify-center animate-pulse">
        <div className="text-muted-400">Loading...</div>
      </div>
    );
  }

  if (error || !images.length) {
    return (
      <div className="w-full h-64 bg-surface-700 rounded-lg flex items-center justify-center">
        <div className="text-muted-400">No image available</div>
      </div>
    );
  }

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg relative">
      <img
        src={images[current]}
        alt={description}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-end p-4">
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 z-10"
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 z-10"
            aria-label="Next image"
          >
            &#8594;
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherImageCard;
