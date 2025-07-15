import { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'AUD', 'BDT'];

  const handleSelect = country => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div className="flex justify-end items-center gap-10 text-sm font-medium text-gray-700 relative z-50">
      {/* Currency Dropdown */}
      <div>
        <select
          value={selectedCurrency}
          onChange={e => setSelectedCurrency(e.target.value)}
          className="px-3 py-2 border rounded bg-white shadow-sm focus:outline-none"
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      {/* Country Dropdown */}
      <div className="relative w-[160px]">
        <button
          onClick={() => setDropdownOpen(prev => !prev)}
          className="w-full flex justify-between items-center px-3 py-2 border rounded bg-white shadow-sm hover:bg-gray-50 focus:outline-none"
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

        {/* Dropdown menu */}
        {dropdownOpen && (
          <ul className="absolute w-full mt-1 border rounded bg-white shadow-lg overflow-hidden max-h-60 overflow-y-auto z-50">
            {countries.map(country => (
              <li
                key={country.value}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(country)}
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

      {/* Social Icons */}
      <div className="flex gap-4 text-lg text-gray-600">
        <a href="#" className="hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-black">
          <FaXTwitter />
        </a>
        <a href="#" className="hover:text-pink-500">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default TopBarRight;
