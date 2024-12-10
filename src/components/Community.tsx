import { Heart, Leaf, Shield, Flame } from 'lucide-react';

const activities = [
  {
    title: "Road Safety Training",
    description: "Providing essential road safety training to promote responsible driving, prevent accidents, and ensure the safety of all road users.",
    image: "/road.jpg",
    icon: Shield,
  },
  {
    title: "Community Fire Safety",
    description: "Conducting free fire safety workshops in local communities, teaching essential prevention and response techniques to create safer neighborhoods.",
    image: "/cf.jpeg",
    icon: Flame,
  },
  {
    title: "Environmental Conservation",
    description: "Leading tree planting initiatives in collaboration with local schools and community groups to combat climate change and create greener spaces.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=500&h=500&q=80",
    icon: Leaf,
  },
  {
    title: "Orphanage Support",
    description: "Regular visits to local orphanages providing medical check-ups, emergency response training, and essential supplies to support vulnerable children.",
    image: "/orphans.webp",
    icon: Heart,
  },
];

const CommunityService = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Service</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Equinox Emergency Training Center, we believe in giving back to our community. Through various initiatives, 
            we work to create positive change and build a safer, healthier society.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <activity.icon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
          >
            Get Involved
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityService;
