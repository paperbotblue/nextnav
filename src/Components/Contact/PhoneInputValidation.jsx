import { useState } from "react";

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
  { name: "Lebanon", code: "+961", maxLength: 8 },
];

function PhoneInputWithCountryNames({...props}) {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isTouched, setIsTouched] = useState(false); // New flag for user interaction
  const [isValid, setIsValid] = useState(false);

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

  const handleBlur = () => {
    setIsTouched(true); // Set touched to true on blur
  };

  return (
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
          {...props}
          type="text"
          name="contact"
          placeholder={`Enter contact number (${selectedCountry.code})`}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onBlur={handleBlur} // Set the touched flag on blur
          maxLength={selectedCountry.maxLength}
          className={`border-b-2 ${
            isTouched && !isValid ? "border-red-500" : "border-gray-300"
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
  );
}

export default PhoneInputWithCountryNames;
