import { useState } from "react";
import side from "../../assets/HomeImg/b1.jpeg";
import contactBg from "../../assets/contactcareer/contactbg.jpg"; // Import your background image
import axios from "axios";

const Career = () => {
  const [imageError, setImageError] = useState(""); // Error for image validation
  const [resumeError, setResumeError] = useState(""); // Error for resume validation


  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email with regex pattern
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    setIsValid(emailRegex.test(value));
    if(isValid)
    {
      handleChange(e);
    }
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

  const [resume, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [isTouched, setIsTouched] = useState(false); // Track user interaction
  const [isValid, setIsValid] = useState(true); // Track validity
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
    if(isValid)
    {
      handleChange(e);
    }
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "image") {
      if (file && /\.(jpeg|jpg|png)$/i.test(file.name)) {
        setImageError("");
        setImage(file);
      } else {
        setImageError("Please upload a valid image file (.jpeg, .jpg, .png).");
      }
    } else if (type === "resume") {
      if (file && /\.pdf$/i.test(file.name)) {
        setResumeError("");
        setFile(file);
      } else {
        setResumeError("Please upload a valid resume in .pdf format.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", formData.name);
    data.append("contact", formData.contact);
    data.append("email", formData.email);
    data.append("course", formData.course);
    data.append("year_of_passing", formData.year_of_passing);
    data.append("major_skill", formData.major_skill);
    data.append("file", resume);
    data.append("image", image);
    try {
      const response = await axios({
        method: 'POST',  // Set the method as POST
        url: 'http://localhost:3000/microservices/sendForm.php',  // The target URL
        headers: {
          'Content-Type': 'multipart/form-data',  // Content type for file upload
        },
        data: data,  // Form data to send
      });
      if (response.data.status === 'success') {
        alert("File uploaded successfully!");
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.", error);
    }
  }



  return (
    <div>
      {/* Breadcrumb Area */}
      <section
        className="relative overflow-hidden text-center py-24 md:py-36 banner-6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${side})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-white opacity-85 z-0"></div>
        <div className="relative z-10 text-gray-700">
          <div className="container mx-auto">
            <div className="flex justify-center items-center">
              <div className="space-y-6">
                <div className="fadeInUp">
                  <ul className="inline-flex space-x-2 text-lg">
                    <li>
                      <p className=" text-3xl text-gray-700">Careers</p>
                    </li>
                  </ul>
                </div>
                <div className="fadeInUp">
                  <h2 className="text-1xl font-semibold leading-relaxed">
                    Join QBC
                    <br />
                    Submit your details to apply for open positions.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    Join Our Team
                  </span>
                  <h2 className="text-3xl font-bold mt-4">
                    Build a Solid Foundation for Your Career
                  </h2>
                  <p className="mt-6 mb-8">
                    We’re always looking for passionate and skilled professionals to join our growing team. Share your details below and let’s construct a brighter future together.
                  </p>
                </div>
                <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
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
                      onChange={(event) =>
                        handleChange(event)
                      }
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
                      className={`border-b-2 py-2 px-4 w-full ${isTouched && !isValid
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
                        className={`border-b-2 ${isTouched && !isValid
                            ? "border-red-500"
                            : "border-gray-300"
                          } focus:border-sky-600 py-2 px-4 w-full`}
                        required
                      />
                    </div>

                  </div>


                  <div className="flex w-full gap-[5%]">
                    <div className="flex flex-col w-[50%]">
                      <label className="block text-sm font-medium text-gray-700">
                        Upload Image
                      </label>
                      <div className="mt-1">
                        <label
                          htmlFor="upload-image"
                          className="cursor-pointer inline-block px-4 py-2 bg-[#1f81b0] text-white text-sm font-medium rounded-md hover:bg-[#236381] transition"
                        >
                          Choose Image
                        </label>
                        <input
                          id="upload-image"
                          type="file"
                          accept=".jpeg, .jpg, .png"
                          onChange={(e) => handleFileChange(e, "image")}
                          className="hidden"
                          required
                        />
                      </div>
                      {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
                    </div>

                    <div className="flex flex-col w-[50%]">
                      <label className="block text-sm font-medium text-gray-700">
                        Upload Resume
                      </label>
                      <div className="mt-1">
                        <label
                          htmlFor="upload-resume"
                          className="cursor-pointer inline-block px-4 py-2 bg-[#1f81b0] text-white text-sm font-medium rounded-md hover:bg-[#236381] transition"
                        >
                          Choose Resume
                        </label>
                        <input
                          id="upload-resume"
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, "resume")}
                          className="hidden"
                          required
                        />
                      </div>
                      {resumeError && <p className="text-red-500 text-sm mt-1">{resumeError}</p>}
                    </div>
                  </div>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-4 px-4 w-full"
                    onChange={(event) =>
                      handleChange(event)
                    }
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
                        href="mailto:contact@QBC.com"
                        className="text-sky-600 hover:underline"
                      >
                        contact@QBC.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
