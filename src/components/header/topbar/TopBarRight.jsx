import { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TopBarRight = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const countries = [
    {
      name: 'United States',
      value: 'US',
      flag: 'https://flagcdn.com/24x18/us.png',
    },
    {
      name: 'United Kingdom',
      value: 'GB',
      flag: 'https://flagcdn.com/24x18/gb.png',
    },
    {
      name: 'Australia',
      value: 'AU',
      flag: 'https://flagcdn.com/24x18/au.png',
    },
    { name: 'Germany', value: 'DE', flag: 'https://flagcdn.com/24x18/de.png' },
    { name: 'France', value: 'FR', flag: 'https://flagcdn.com/24x18/fr.png' },
    {
      name: 'Bangladesh',
      value: 'BD',
      flag: 'https://flagcdn.com/24x18/bd.png',
    },
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'AUD', 'BDT'];

  const handleSelectCountry = country => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div className="flex justify-end items-center gap-[49px] relative z-50">
      {/* ✅ Currency Selector */}
      <div className="w-[120px]">
        <select
          value={selectedCurrency}
          onChange={e => setSelectedCurrency(e.target.value)}
          className="w-full px-3 py-2 border rounded bg-white shadow-sm text-sm hover:bg-gray-50 focus:outline-none"
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Country Dropdown */}
      <div className="relative after:absolute after:content-[''] after:h-[32px] after:w-[1px] after:bg-[#303030] after:opacity-[.25] after:left-[-25px] after:top-1/2 after:-translate-y-1/2 w-[170px]">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex justify-between items-center px-3 py-2 border rounded bg-white shadow-sm hover:bg-gray-50 focus:outline-none text-sm"
        >
          {selectedCountry ? (
            <div className="flex items-center gap-2">
              <img src={selectedCountry.flag} alt="" className="w-5 h-auto" />
              <span>{selectedCountry.name}</span>
            </div>
          ) : (
            <span className="text-gray-500">Select Country</span>
          )}
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Country List Dropdown */}
        {dropdownOpen && (
          <ul className="absolute w-full mt-1 border rounded bg-white shadow-lg max-h-60 overflow-y-auto z-50">
            {countries.map(country => (
              <li
                key={country.value}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectCountry(country)}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5 h-auto"
                />
                <span>{country.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ✅ Social Icons */}
      <div
        className="flex gap-4 text-lg text-gray-600
      relative after:absolute after:content-[''] after:h-[32px] after:w-[1px] after:bg-[#303030] after:opacity-[.25] after:left-[-25px] after:top-1/2 after:-translate-y-1/2 w-[170px]"
      >
       
        <Link to={"#"}>
            <FaXTwitter />
        </Link>
        <Link to={"#"}>
          <FaFacebookF />
        </Link>
        <Link to={"#"}>
           <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default TopBarRight;
