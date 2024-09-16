import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface AlumniData {
  name: string;
  class: string;
  image: string;
  text: string;
}

const DistAlumniCarousel: React.FC = () => {
  const [alumniData, setAlumniData] = useState<AlumniData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupAlumni, setPopupAlumni] = useState<AlumniData | null>(null);

  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        const response = await fetch('/admin/alumnicarousel.json');
        const data: AlumniData[] = await response.json();
        setAlumniData(data);
      } catch (error) {
        console.error('Error fetching alumni data:', error);
      }
    };

    fetchAlumniData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === alumniData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? alumniData.length - 1 : prevIndex - 1
    );
  };

  const visibleSlides = 4; // Number of slides to show at a time
  const totalSlides = alumniData.length;

  const getVisibleAlumni = () => {
    const startIndex = currentIndex;
    const endIndex = (startIndex + visibleSlides) % totalSlides;
    if (startIndex < endIndex) {
      return alumniData.slice(startIndex, endIndex);
    } else {
      return [...alumniData.slice(startIndex), ...alumniData.slice(0, endIndex)];
    }
  };

  const openPopup = (alum: AlumniData) => {
    setPopupAlumni(alum);
  };

  const closePopup = () => {
    setPopupAlumni(null);
  };

  return (
    <section id="notedAlumni" className="bg-white py-8">
      <div className="relative w-full mx-auto px-10">
        <p className="text-3xl font-bold py-2">Distinguished Alumni</p>

        <div className="relative">
          <div className="flex overflow-hidden">
            {alumniData.length ? (
              getVisibleAlumni().map((alum, index) => {
                const imageSrc = alum.image || './media/blank-profile-picture.png';
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-1/4 p-4"
                    onClick={() => openPopup(alum)}
                  >
                    <div className="relative rounded shadow overflow-hidden group cursor-pointer">
                      <img
                        className="h-[35vh] w-full object-cover"
                        src={imageSrc}
                        alt={alum.name}
                        onError={(e) => (e.currentTarget.src = './media/blank-profile-picture.png')}
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-base md:text-lg lg:text-xl p-4">{alum.text}</p>
                      </div>
                      <div className="absolute bottom-0 p-4 z-50 text-white drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-lg md:text-xl lg:text-2xl font-semibold">{alum.name}</p>
                        <p>{alum.class}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No alumni data available</p>
            )}
          </div>

          {/* Custom Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 rounded-full p-2 hover:bg-gray-400 z-10"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 rounded-full p-2 hover:bg-gray-400 z-10"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Popup Component */}
      {popupAlumni && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg relative max-w-md mx-auto max-h-[90vh] overflow-y-auto">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
            <img
              className="w-full h-48 object-cover rounded"
              src={popupAlumni.image}
              alt={popupAlumni.name}
            />
            <h3 className="text-2xl font-semibold mt-4">{popupAlumni.name}</h3>
            <p className="text-gray-700 mt-2">{popupAlumni.text}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DistAlumniCarousel;
