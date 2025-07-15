import { useState } from "react";

const TopBarRight = () => {
  const [selectedCountry, setSelectedCountry]= useState('null')
   const countries = [
     {
       name: 'United States',
       value: 'US',
       flag: 'https://flagcdn.com/16x12/us.png',
     },
     {
       name: 'United Kingdom',
       code: 'GB',
       flag: 'https://flagcdn.com/16x12/gb.png',
     },
     {
       name: 'Australia',
       code: 'AU',
       flag: 'https://flagcdn.com/16x12/au.png',
     },
     { name: 'Germany',  value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
     { name: 'France',  value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
   ];

  return (
    <div className="flex justify-end items-center gap-[49px]">
      <div>one</div>
      <div className="relative after:absolute after:content-[''] after:h-[32px] after:w-[1px] after:bg-[#303030] after:opacity-[.25] after:left-[-25px] after:top-[50%]  after:-translate-1/2">
        <select
        name="country"
        value={selectedCountry?.value}>
          <option><img src=""/>Us</option>
          <option>bd</option>
        </select>
      </div>
      <div className="relative after:absolute after:content-[''] after:h-[32px] after:w-[1px] after:bg-[#303030] after:opacity-[.25] after:left-[-25px] after:top-[50%]  after:-translate-1/2">
        three
      </div>
    </div>
  );
}

export default TopBarRight