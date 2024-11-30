import { useEffect, useState } from "react";

const Fetch2 = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        console.log(data);
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="h-screen overflow-y-auto p-4 ">
      <div className="grid grid-cols-12 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="col-span-1">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-auto"
              title={photo.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch2;
