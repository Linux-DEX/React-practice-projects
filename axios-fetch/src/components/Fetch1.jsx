import { useEffect, useState } from "react";

const Fetch1 = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
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

export default Fetch1;
