

const Mission = () => {
  return (
    <section className="relative py-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] bg-cover bg-center"
        style={{ opacity: 0.15 }}
      />
      
      {/* Header Section with geometric background */}
      <div className="relative bg-blue-900 py-16 mb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgxNDQwdjQwMEgweiIgZmlsbD0iIzFkNGVkOCIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjwvc3ZnPg==')] bg-cover opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-2">
            <h2 className="text-5xl font-bold text-red-500">VISION</h2>
            <h2 className="text-5xl font-bold text-red-500">MISSION</h2>
            <h2 className="text-5xl font-bold text-red-500">VALUES</h2>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-1 bg-red-500" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Mission Section */}
            <div>
              <div className="flex items-center">
                <div className="w-2 h-16 bg-red-500 mr-4" />
                <h2 className="text-4xl font-bold text-blue-900">MISSION</h2>
              </div>
              <p className="mt-6 text-gray-700 text-lg">
                Provision of quality patient orientated training that evidence – based from scientific philosophy and learning approach.
              </p>
            </div>

            {/* Vision Section */}
            <div>
              <div className="flex items-center">
                <div className="w-2 h-16 bg-red-500 mr-4" />
                <h2 className="text-4xl font-bold text-blue-900">VISION</h2>
              </div>
              <p className="mt-6 text-gray-700 text-lg">
                Pioneering specialized emergency medical care and safety, Rescue training that qualifies for efficient patient and causality accessibility and quality management.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-2 h-16 bg-red-500 mr-4" />
              <h2 className="text-4xl font-bold text-blue-900">OUR VALUES</h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-blue-600 mb-2">Compassion</h3>
                <p className="text-gray-700">
                  We train our students to care for patients with compassion and empathy. We train them to touch lives and to go beyond call of duty.
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-blue-600 mb-2">Accountable and Responsible</h3>
                <p className="text-gray-700">
                  We do what we commit ourselves and we take responsibility for our actions. We support each other to deliver in time and respond to the lessons learnt along the way.
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-blue-600 mb-2">Respect</h3>
                <p className="text-gray-700">
                  We treat our students and clients with respect we expect to be shown ourselves. We work as a team and instill that to our learners.
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-blue-600 mb-2">Excellence and Innovation</h3>
                <p className="text-gray-700">
                  As an institution we are committed to providing excellent services. We keep on coming up with new ways to deliver our services and improve the quality of our products through vigorous research and design process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;