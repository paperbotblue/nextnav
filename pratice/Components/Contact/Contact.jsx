import { useState } from "react";
import contactBg from "./contactbg.jpg"; // Import your background image
import PhoneInputValidation from "./PhoneInputValidation";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isTouched, setIsTouched] = useState(false); // Track user interaction
  const [isValid, setIsValid] = useState(true); // Track validity

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email with regex pattern
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleBlur = (field) => {
    if (field === "email" || field === "phone") {
      setIsTouched(true);
    }
  };

  const countryData = [
    { name: "India", code: "+91", maxLength: 10 },
    { name: "USA", code: "+1", maxLength: 10 },
    { name: "UK", code: "+44", maxLength: 11 },
    { name: "Australia", code: "+61", maxLength: 9 },
    { name: "China", code: "+86", maxLength: 11 },
    { name: "Japan", code: "+81", maxLength: 10 },
    { name: "Germany", code: "+49", maxLength: 10 },
    { name: "Brazil", code: "+55", maxLength: 11 },
    { name: "South Africa", code: "+27", maxLength: 9 },
    { name: "France", code: "+33", maxLength: 9 },
    { name: "Italy", code: "+39", maxLength: 10 },
    { name: "Spain", code: "+34", maxLength: 9 },
    { name: "Russia", code: "+7", maxLength: 10 },
    { name: "Sweden", code: "+46", maxLength: 9 },
    { name: "Norway", code: "+47", maxLength: 8 },
    { name: "Denmark", code: "+45", maxLength: 8 },
    { name: "Poland", code: "+48", maxLength: 9 },
    { name: "Netherlands", code: "+31", maxLength: 9 },
    { name: "Belgium", code: "+32", maxLength: 9 },
    { name: "Switzerland", code: "+41", maxLength: 9 },
    { name: "Austria", code: "+43", maxLength: 10 },
    { name: "Portugal", code: "+351", maxLength: 9 },
    { name: "Saudi Arabia", code: "+966", maxLength: 9 },
    { name: "UAE", code: "+971", maxLength: 9 },
    { name: "Qatar", code: "+974", maxLength: 8 },
    { name: "Kuwait", code: "+965", maxLength: 8 },
    { name: "Oman", code: "+968", maxLength: 8 },
    { name: "Bahrain", code: "+973", maxLength: 8 },
    { name: "Israel", code: "+972", maxLength: 9 },
    { name: "Turkey", code: "+90", maxLength: 10 },
    { name: "Jordan", code: "+962", maxLength: 9 },
    { name: "Lebanon", code: "+961", maxLength: 8 }
  ];

  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (e) => {
    const country = countryData.find((c) => c.name === e.target.value);
    if (country) {
      setSelectedCountry(country);
      setPhoneNumber(""); // Reset phone number on country change
      setIsTouched(false); // Reset interaction flag
      setIsValid(false);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setPhoneNumber(value);
    setIsValid(value.length === selectedCountry.maxLength); // Validate length
  };

  return (
    <div>
      {/* First Background Section */}
      <div
        className="relative h-full max-w-[120em] mx-auto py-[15em] bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-left pt-20 text-white px-4 md:px-20">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Find your perfect home
            </h1>
            <p className="text-base md:text-lg mb-2">
              Your perfect home is our priority, make it your priority as well
            </p>

            <div className="flex mt-6 space-x-4">
              <button className="bg-white cursor-pointer text-black font-semibold py-2 px-4 rounded">
                Talk To Agent
              </button>
              <button className="border border-white text-white font-semibold py-2 px-4 rounded">
                See Our Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Background Section */}
      <div
        className="relative h-full w-full flex max-h-[80em] max-w-[120em] mx-auto py-[2em] bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }} // Use imported image
      >
        {/* Contact Form */}
        <section className="contact-page w-full px-2 md:px-16 py-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center mx-auto items-start md:ml-[1em] space-y-8 md:space-y-0 md:space-x-8">
              {/* Form */}
              <div className="w-full bg-white/70 backdrop-blur-lg shadow-lg p-5 md:p-10 rounded-lg max-w-lg">
                <div className="text-left mb-8">
                  <span className="text-sky-600 text-lg uppercase">
                    Contact Now
                  </span>
                  <h2 className="text-3xl font-bold mt-4">
                    Let's Start With Us
                  </h2>
                  <p className="mt-6 mb-8">
                    Let us know about your requirements, and provide the
                    following details. We will get back to you with an idea of a
                    brilliant software.
                  </p>
                </div>
                <form method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z\s]/g,
                          ""
                        ); // Remove numbers and special symbols
                      }}
                      className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4 w-full"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={() => handleBlur("email")} // Set touched on blur
                      pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                      title="Please enter a valid email address."
                      className={`border-b-2 py-2 px-4 w-full ${
                        isTouched && !isValid
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-sky-600`}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex">
                      {/* Dropdown showing only country names */}
                      <select
                        value={selectedCountry.name}
                        onChange={handleCountryChange}
                        className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-2 w-1/10"
                        required
                      >
                        {countryData.map((country) => (
                          <option key={country.code} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      {/* Phone number input */}
                      <input
                        type="text"
                        name="contact"
                        placeholder={`Enter contact number (${selectedCountry.code})`}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        onBlur={() => handleBlur("phone")} // Set the touched flag on blur
                        maxLength={selectedCountry.maxLength}
                        className={`border-b-2 ${
                          isTouched && !isValid
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:border-sky-600 py-2 px-4 w-full`}
                        required
                      />
                    </div>
                    <select
                      name="select"
                      className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4"
                      required
                    >
                      <option value="personal">Personal</option>
                      <option value="business">Business</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-4 px-4 w-full"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
              {/* Contact Details */}
              <div className="w-full md:w-2/5">
                <div className="bg-white/70 backdrop-blur-lg p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-envelope text-sky-600 text-2xl mr-4"></i>
                    <div className="text-black">
                      <span className="font-bold text-xl">Email:</span>
                      <p className="text-gray-500">
                        Our support team will get back to you within 24 business
                        hours.
                      </p>
                      <a
                        href="mailto:contact@versai.in"
                        className="text-sky-600 hover:underline"
                      >
                        contact@versai.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="map-container w-full max-w-[120em] mx-auto h-64 sm:h-96 mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5734.176659695206!2d55.334665276732146!3d25.25812960357367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cddf0eb68e5%3A0x2b6ee6e286309287!2sBusiness%20Point%20Center!5e0!3m2!1sen!2sin!4v1732366443769!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
