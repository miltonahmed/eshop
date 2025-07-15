import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const TopBarLeft = () => {
  return (
    <address className="flex items-center gap-[50px]  relative after:absolute after:content-[''] after:h-[32px] after:w-[1px] after:bg-[#303030] after:opacity-[.25] after:left-[62%] after:top-[50%] after:-translate-1/2 ">
      <Link
        to="https://maps.app.goo.gl/4rgatRkbrjYp7Q5q7"
        target="_blank"
        className="flex items-center gap-2 text-[#303030]"
      >
        <IoLocationOutline />
        123 Main Street, Anytown USA
      </Link>

      <Link
        to="tel:01781104874"
        className="flex items-center gap-2 text-[#303030]"
      >
        <FiPhone />
        +1 (555) 123‑4567
      </Link>
    </address>
  );
};

export default TopBarLeft;
