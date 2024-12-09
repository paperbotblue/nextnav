const SerComp4 = () => {
  return (
    <div className="flex flex-col items-center p-8 max-w-[120em] md:pl-[5em] lg:px-[10em] mx-auto bg-[#273236] text-white font-sans relative">
      <h1 className="text-4xl font-bold text-center md:text-left mb-8">
        Our Values Are Not Just Words; They Are The Driving Force Behind Our Commitment To Our Clients, Our Team, And The Community We Serve.
      </h1>
      <div className="flex flex-col md:flex-row items-center relative">
        <img
          src="https://placehold.co/400x400"
          alt="Construction worker on a steel structure"
          className="rounded-lg mb-8 md:mb-0 md:mr-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
          <div className="bg-[#283337] p-4 rounded-lg shadow-lg">
            <i className="fas fa-award text-2xl mb-2"></i>
            <h2 className="text-xl font-semibold">Excellence</h2>
            <p>We are dedicated to delivering the best quality in every project.</p>
          </div>
          <div className="bg-[#283337] p-4 rounded-lg shadow-lg">
            <i className="fas fa-handshake text-2xl mb-2"></i>
            <h2 className="text-xl font-semibold">Integrity</h2>
            <p>We hold ourselves to the highest ethical standards.</p>
          </div>
          <div className="bg-[#283337] p-4 rounded-lg shadow-lg">
            <i className="fas fa-leaf text-2xl mb-2"></i>
            <h2 className="text-xl font-semibold">Sustainability</h2>
            <p>We prioritize eco-friendly practices for a smaller carbon footprint.</p>
          </div>
          <div className="bg-[#283337] p-4 rounded-lg shadow-lg">
            <i className="fas fa-lightbulb text-2xl mb-2"></i>
            <h2 className="text-xl font-semibold">Innovation</h2>
            <p>We embrace innovation as a means to improve and evolve.</p>
          </div>
        </div>
        {/* Four Vertical Bars */}
        <div className="absolute inset-0 flex justify-between max-w-6xl mx-auto z-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-white opacity-20"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SerComp4;
