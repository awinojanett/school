

const galleryImages = [
  {
    url: "/101.JPG",
    title: "Training Session"
  },
  {
    url: "/105.JPG",
    title: "Training Equipment"
  },
  {
    url: "/108.JPG",
    title: "Patient Vital Signs Session"
  },
  {
    url: "/firstaid.JPG",
    title: "First Aid Training"
  },
  {
    url: "/107.JPG",
    title: "Chocking Demonstration"
  },
  {
    url: "/104.JPG",
    title: "First Aid Training"
  }
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facility</h2>
          <p className="text-lg text-gray-600">Take a look at our state-of-the-art training facilities</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;