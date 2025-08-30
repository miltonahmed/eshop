import { FaLocationDot, FaMessage } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import Logo from '../../../src/assets/images/logo.png';
import Payment from '../../../src/assets/images/payment.png';
import Container from "../utils/Container";

const FooterBottom = () => {
  return (
    <div className="bg-white mt-25">
      <Container>
        <div className="flex mb-20">
          <div className="mr-[167px]">
            <img src={Logo} alt="company logo" />
            <ul className="flex flex-col gap-3 mt-[158px]">
              <div className="relative pl-8">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-primary-text-color text-xl">
                  <IoCall />
                </span>
                <li to="" className="list-none">
                  +1 (555) 123-4567
                </li>
              </div>
              <div className="relative pl-8">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-primary-text-color text-xl">
                  <FaMessage />
                </span>
                <li to="" className="list-none">
                  information@eshop.com
                </li>
              </div>
              <div className="relative pl-8">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-primary-text-color text-xl">
                  <FaLocationDot />
                </span>
                <li to="" className="list-none">
                  123 Main Street, Suite 105, Anytown USA
                </li>
              </div>
            </ul>
          </div>
          <div className="mr-[96px]">
            <h3 className="font-poppins font-semibold text-xl text-primary-text-color leading-8">
              Links
            </h3>
            <ul className="flex flex-col gap-3 mt-6 text-base font-montserrat font-normal leading-6 text-primary-text-color">
              <li>Products List </li>
              <li>Order Tracking </li>
              <li>Products Guide </li>
              <li>Shopping Cart </li>
              <li>Shopping Cart </li>
              <li>Tech Blog </li>
            </ul>
          </div>
          <div className="mr-[96px]">
            <h3 className="font-poppins font-semibold text-xl text-primary-text-color leading-8">
              Links
            </h3>
            <ul className="flex flex-col gap-3 mt-6 text-primary-text-color text-base font-montserrat font-normal leading-6">
              <li>About Us </li>
              <li>Privacy Policy </li>
              <li>Return Policy </li>
              <li>Help Centre </li>
              <li>Store Locations</li>
              <li>Careers </li>
            </ul>
          </div>
          <div className="mr-20">
            <h3 className="font-poppins font-semibold text-xl text-primary-text-color leading-8">
              Links
            </h3>
            <ul className="flex flex-col gap-3 mt-6 text-primary-text-color text-base font-montserrat font-normal leading-6">
              <li>Computers & Tablets </li>
              <li>Mobile Phones & Accessories </li>
              <li>TV & Home Theater </li>
              <li>Audio & Headphones </li>
              <li>Cameras & Camcorders</li>
              <li>Gaming Equipment </li>
              <li>Home Appliances </li>
            </ul>
          </div>
          <div>
            <div className="mb-[72px]">
              <h3 className="font-poppins font-semibold text-xl text-primary-text-color leading-8 mb-6">
                Payments
              </h3>
              <img src={Payment} alt="Payment Method" />
            </div>

            <h3 className="font-poppins font-semibold text-xl text-primary-text-color leading-8">
              Follow Us
            </h3>
            <ul className="flex flex-col gap-3 mt-6 text-primary-text-color text-base font-montserrat font-normal leading-6">
              <li>Twitter </li>
              <li>Instagram </li>
              <li>Facebook </li>
            </ul>
          </div>
        </div>
        <hr className="border bg-[#303030] opacity-25 "></hr>
        <div className="flex mb-20 justify-between items-center mt-2">
          <h6 className="font-montserrat font-normal text-sm text-primary-text-color opacity-75 ">
            Copyright © 2023 E-Shop. All Rights Reserved.{' '}
          </h6>
          <h6 className="font-montserrat font-normal text-sm text-primary-text-color opacity-75 ">
            Privacy Policy | Terms & Condition | Sitemap
          </h6>
        </div>
      </Container>
    </div>
  );
}
{/* <div className="relative pl-16 mr-[90px] after:absolute after:w-[1px] after:h-[32px] after:bg-[#303030] after:opacity-[0.5] after:ml-10 after:top-1/2 after:-translate-y-1/2 ">
              <div className="absolute top-[10px] left-0">
                <CartIcons />
              </div>
              <p className="text-base font-montserrat text-primary-text-color font-normal leading-6">
                Cart
              </p>
              <span className="text-base font-montserrat font-bold leading-6 text-primary-text-color">
                $ 150,00
              </span>
            </div> */}

export default FooterBottom