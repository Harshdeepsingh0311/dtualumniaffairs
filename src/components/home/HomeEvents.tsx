import React, { useState, useEffect } from "react";

// Define the type for event data
interface Event {
  image: string;
  title: string;
  date: string;
  link: string;
}

// Define the component's state and modal state
const HomeEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch events data from the JSON file
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/admin/events.json");
        const data: Event[] = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    };

    fetchEvents();
  }, []);

  // Show modal with selected image
  const showModal = (image: string) => {
    setSelectedImage(image);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="Events" className="pb-10 bg-white">
      {/* The Modal */}
      {selectedImage && (
        <div className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">
          <a
            className="fixed z-90 top-6 right-8 text-white text-5xl font-bold cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </a>
          <img
            className="max-w-[800px] max-h-[600px] object-cover"
            src={selectedImage}
            alt="Event"
          />
        </div>
      )}

      <p className="text-3xl font-bold py-2 w-10/12 mx-auto lg:w-9/12">
        Events
      </p>

      {/* Events list */}
      <div className="mx-auto w-10/12 max-h-[500px] overflow-y-scroll lg:w-9/12 bg-gray-200 text-white md:rounded-md">
        <ul id="events_list" className="divide-y divide-gray-500 mx-4">
          {events.map((event, index) => {
            const currentDate = new Date().toISOString().split("T")[0];
            const isPast = currentDate > event.date;

            return (
              <li key={index} className="pb-3 sm:pb-4 pt-4">
                <div className="flex flex-col md:flex-row items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-24 w-60 object-cover rounded-md cursor-pointer"
                      src={event.image}
                      alt="Event"
                      onClick={() => showModal(event.image)}
                    />
                  </div>
                  <div className="flex flex-row justify-between md:w-full">
                    <div>
                      <p className="text-lg font-medium text-gray-900 truncate">
                        {event.title}
                      </p>
                      <div className="flex-row flex gap-2">
                        <p className="text-sm text-gray-500 truncate">
                          {event.date}
                        </p>

                        
                      </div>
                    </div>

                    <div className="items-center hidden md:inline-flex">
                      {isPast ? (
                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-3 py-0.5 rounded-full border border-red-400">
                          <a href={event.link}>Past/Info</a>
                        </span>
                      ) : (
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-3 py-0.5 rounded-full border border-green-600">
                          <a href={event.link}>Register/Info</a>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HomeEvents;
