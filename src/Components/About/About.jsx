// About.jsx
import { FaArrowRight } from 'react-icons/fa';
import { FaAward, FaHandshake, FaLeaf, FaLightbulb } from 'react-icons/fa';
import Directors from './Directors';
import Comp2 from './Comp2';
import History from './HIstory';
import Responsibilities from './Responsibilities';
const About = () => {
    return (
      <div>
   <div className="relative max-w-[120em] mx-auto">
  {/* Background Image Section */}
  <div className="relative">
    <img
      src="https://picsum.photos/1920/600"
      alt="City skyline with buildings covered in fog"
      className="w-full h-96 object-cover"
    />
    <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-start pl-10 md:pl-24 lg:pl-44 ">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#00215b]">About Us</h1>
      <p className="text-lg text-gray-700 mt-2">Home / About</p>
    </div>
  </div>

  {/* Contact Info Card */}
  <div className="absolute -bottom-10 md:right-20 right-3 w-4/6 sm:w-2/6 md:w-2/6 bg-white shadow-lg p-6 border-t-4 border-blue-900 rounded-md">
    <div className="pt-2">
      <p className="text-gray-500">Call Us Today</p>
      <p className="text-2xl font-bold text-blue-900">+ 1634 7638 654</p>
    </div>
  </div>
</div>


        <Comp2/>

            <div className="flex  mt-16 md:mt-10 items-center min-h-[40em] bg-white">
            <div className="max-w-[120em] md:ps-[8em] md:pe-[4em] lg:pe-[2em] mx-auto p-4 flex flex-col lg:flex-row">
                {/* Image and Experience Section */}
                <div className="w-full lg:w-1/2 relative h-64 md:h-96">
                    <img
                        src="https://picsum.photos/600/800"
                        alt="A construction worker holding a clipboard with a construction site in the background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-blue-900 text-white p-4">
                        <p className="text-3xl font-bold">25+</p>
                        <p className="text-lg">Years of Experience</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 lg:pl-10 md:pe-10 mt-8 md:mt-0">
                    <h2 className="text-blue-900 text-sm font-bold">ABOUT US</h2>
                    <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mt-2">
                        We're providing the best customer service
                    </h1>

                    <div className="flex items-center mt-4">
                        <img
                            src="https://picsum.photos/100/100"
                            alt="Portrait of Sean Bradshaw, CEO"
                            className="w-16 h-16 object-cover mr-4"
                        />
                        <div>
                            <p className="text-gray-700">
                                Eenean tristique felis sed tellus aliquam pharetra. Nulla vel sapien vel metus feugiat euismod
                            </p>
                            <p className="text-blue-900 font-bold mt-2">Sean Bradshaw, CEO</p>
                        </div>
                    </div>

                    <p className="text-gray-700 mt-4">
                        Proin efficitur non ligula vitae porta. Pellentesque accumsan ullamcorper erat nec luctus. Sed at fermentum velit. Mauris tempor ante quis augue vestibulum ullamcorper. Donec volutpat ante ut condimentum porta
                    </p>

                    <button className="mt-6 bg-blue-900 text-white py-2 px-4 rounded-full flex items-center">
                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
            </div>
            
            <Directors/>

            <History/>



<div className="flex flex-col items-center justify-start p-4 md:p-8 bg-gray-900 max-h-[80em] max-w-[120em] md:ps-[8em] md:pe-[4em] lg:pe-[2em] mx-auto">
  <h1 className="text-xl sm:3xl md:text-4xl lg:text-5xl font-bold text-center md:mb-10 relative">
    <span className="block h-[7em] sm:h-[5em] md:h-[7em]  lg:h-[5em] xl:h-[4em] 2xl:h-[3em] lg:px-16 text-transparent bg-gradient-to-b from-white bg-clip-text">
      Our Values Are The Cornerstone Of Everything We Do.
      They Guide Our Actions, Inspire Our Decisions,
      and Underpin The Culture Of Excellence That Defines Our Organization.
    </span>
  </h1>
  <p className="text-center text-base md:text-lg mb-6 md:mb-8 text-white">
    Our values are not just words; they are the driving force behind our commitment to our clients, our team,
    <br />and the community we serve.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl">
    <div className="bg-blue-900 p-4 md:p-6 rounded-lg shadow-lg">
      <FaAward className="text-xl md:text-2xl mb-2 md:mb-4 text-white" />
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Excellence</h2>
      <p className="text-sm md:text-base text-white">
        We are dedicated to delivering the best quality in every project. Excellence is our standard, and we are committed to exceeding expectations.
      </p>
    </div>
    <div className="bg-blue-900 p-4 md:p-6 rounded-lg shadow-lg">
      <FaHandshake className="text-xl md:text-2xl mb-2 md:mb-4 text-white" />
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Integrity</h2>
      <p className="text-sm md:text-base text-white">
        We hold ourselves to the highest ethical standards. Integrity is the bedrock of our reputation and trust. We are honest, transparent, and principled in all our interactions.
      </p>
    </div>
    <div className="bg-blue-900 p-4 md:p-6 rounded-lg shadow-lg">
      <FaLeaf className="text-xl md:text-2xl mb-2 md:mb-4 text-white" />
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Sustainability</h2>
      <p className="text-sm md:text-base text-white">
        Environmental responsibility is at the heart of our values. We are committed to sustainable practices that reduce our carbon footprint and promote a greener future for all.
      </p>
    </div>
    <div className="bg-blue-900 p-4 md:p-6 rounded-lg shadow-lg">
      <FaLightbulb className="text-xl md:text-2xl mb-2 md:mb-4 text-white" />
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Innovation</h2>
      <p className="text-sm md:text-base text-white">
        We embrace innovation as a means to improve and evolve. From the latest construction technologies to sustainable practices, we continuously seek new and better ways to deliver value to our clients.
      </p>
    </div>
  </div>
</div>



<Responsibilities/>


<div className="relative ">
    {/* Background Section */}
    <div
        className="relative h-[28em] flex justify-center md:h-[40vh] lg:h-[40em]  w-full max-w-[120em] mx-auto bg-cover bg-center px-10"
        style={{ backgroundImage: "url(https://picsum.photos/960/540)" }}
    >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center text-center md:ps-[8em] md:pe-[4em] lg:pe-[2em] text-white px-8 py-8 md:py-16 lg:py-20">
            <h2 className="text-sm md:text-lg mb-2">Get a Quote</h2>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Build Your Future Today</h1>
            <p className="text-sm md:text-base lg:text-lg mb-6">
                Pellentesque ex ex, suscipit et lectus at, mollis tempus ligula. Praesent sagittis eros orci, at sodales dolor rutrum
            </p>
            <button className="bg-blue-900 mb-40 md:mb-0 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-blue-900 transition duration-300 flex items-center">
                Learn More <FaArrowRight className="ml-2" />
            </button>
        </div>
    </div>

{/* Horizontal Center Wrapper */}
<div className="flex justify-center w-full px-4">
    {/* Cards Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[120em] w-full md:ps-[8em] md:pe-[4em] lg:pe-[2em]">
        {["01", "02", "03"].map((step, index) => (
            <div
                key={index}
                className="bg-white flex flex-row items-center p-4 md:p-6 rounded-lg shadow-lg w-full h-28 md:h-32 lg:h-40 text-left"
            >
                {/* Step Circle */}
                <div
                    className={`rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg md:text-xl font-bold ${
                        step === "02" ? "bg-blue-900" : "bg-blue-900"
                    } text-white mr-3 md:mr-4`}
                >
                    {step}
                </div>
                {/* Text Content */}
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1 md:mb-2">Kind Consultation</h3>
                    <p className="text-xs md:text-sm text-gray-600">Etiam ac leo at quam aliquet</p>
                </div>
            </div>
        ))}
    </div>
</div>



</div>

            
<div className="container max-w-[120em] mx-auto mt-5 md:mt-40 px-0 font-['Roboto'] md:pl-[10em] md:pr-[3em]">
  <div className="container mt-52 md:mt-40 mx-auto px-0 font-['Roboto']">
    <div className="grid grid-cols-1 gap-4 my-8 justify-center">
      <div className="relative">
        <img
          src="https://picsum.photos/300/200"
          alt="City skyline with tall buildings"
          className="w-full"
        />
        <div className="absolute md:right-20 -bottom-32 sm:bottom-5 md:bottom-52 lg:bottom-64 w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto max-h-[50%] bg-white bg-opacity-50 backdrop-blur-lg flex flex-col justify-center text-gray-900 p-2 sm:p-4 overflow-hidden">
          <h1 className="text-base sm:text-lg md:text-2xl text-blue-900 font-bold text-left truncate">
            Glass High-rise
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-left overflow-hidden text-ellipsis">
            As for who is the author of this miracle, opinions differ: some
            call the well-known Guillaume de Beauplan, others - Andrea del
            Acqua, although it is quite possible that both worked on it. As for
            who is the author of this miracle, opinions differ: some call the
            well-known Guillaume de Beauplan, others - Andrea del Acqua,
            although.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-32 justify-center">
        <div className="text-center p-4">
          <img
                    src="https://picsum.photos/300/200
            "
            alt="Victorian style house"
            className="w-full h-auto mx-auto"
          />
          <p className="mt-2 text-sm sm:text-base lg:text-lg">
            A classic Victorian style house.
          </p>
        </div>
        <div className="text-center p-4">
          <img
            src="https://picsum.photos/300/200"
            alt="Modern suburban house"
            className="w-full h-auto mx-auto"
          />
          <p className="mt-2 text-sm sm:text-base lg:text-lg">
            A modern suburban house with a cozy feel.
          </p>
        </div>
        <div className="text-center p-4">
          <img
            src="https://picsum.photos/300/200"
            alt="Victorian style house"
            className="w-full h-auto mx-auto"
          />
          <p className="mt-2 text-sm sm:text-base lg:text-lg">
            Another view of a beautiful Victorian style house.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        
        <div className='container max-w-[120em] mx-auto md:ps-[8em] md:pe-[4em] lg:pe-[2em]' >
        <div className="flex flex-col lg:flex-row items-center px-10 justify-between my-16">
                <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                    <h2 className="text-blue-900 text-sm font-bold">OUR COMPANY</h2>
                    <h1 className="text-4xl font-bold text-blue-900 my-4">
                        Develop your leaders into a competitive advantage
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Nunc a blandit urna. Aliquam dapibus pellentesque purus, porta luctus tortor porta ut. Fusce mattis lacus feugiat libero vulputate, nec fringilla felis ultricies. Proin neque libero, tempus sed nisi vel, suscipit maximus elit. Aenean pulvinar vestibulum porttitor.
                    </p>
                    <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-bold flex items-center">
                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                <div className="lg:w-1/2 w-full">
                    <img src="https://picsum.photos/600/400" alt="Construction workers in safety gear" className="w-full" />
                </div>
            </div>
          </div>
        </div>


  );
};

export default About;
