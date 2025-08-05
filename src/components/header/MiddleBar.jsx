import { IoIosSearch } from 'react-icons/io';
import Logo from '../../../src/assets/images/logo.png';
import Container from '../utils/Container';
import { CartIcons } from '../utils/icons/CartIcons';
import { UsersIcon } from '../utils/icons/UsersIcon';

const MiddleBar = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center py-8">
          <div>
            <img src={Logo} alt="company logo" />
          </div>
          <div className="flex items-center">
            {/* search  */}
            <div className="relative mr-12">
              <input
                className="w-[332px] border border-[#303030] rounded-lg py-[18px] px-6 "
                type="text"
                placeholder="Search Products ..."
              />
              <IoIosSearch className="absolute top-5 right-5  text-2xl" />
            </div>
            <div className="relative pl-16 mr-[90px] after:absolute after:w-[1px] after:h-[32px] after:bg-[#303030] after:opacity-[0.5] after:ml-10 after:top-1/2 after:-translate-y-1/2 ">
              <div className="absolute top-[10px] left-0">
                <CartIcons />
              </div>
              <p className="text-base font-montserrat text-primary-text-color font-normal leading-6">
                Cart
              </p>
              <span className="text-base font-montserrat font-bold leading-6">
                $ 150,00
              </span>
            </div>
            <div className="relative pl-16 ">
              <div className="absolute top-[10px] left-0 ">
                <UsersIcon />
              </div>
              <p className="text-base font-montserrat text-primary-text-color font-normal leading-6">
                User
              </p>
              <span className="text-base font-montserrat font-bold leading-6">
                Account
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MiddleBar;
