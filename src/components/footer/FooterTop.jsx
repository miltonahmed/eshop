

import Button from "../common/Button";
import Container from "../utils/Container";

const FooterTop = () => {
  return (
    <div>
      <Container>
        <div className="bg-linear-(--footer_bg_linear)  rounded-3xl py-28 px-24">
          <h3 className="font-poppins font-semibold text-4xl text-primary-text-color leading-11 ">
            Get Our Updates
          </h3>
          <p className="text-lg text-primary-text-color leading-7 font-montserrat font-normal max-w-[441px] mt-4 mb-8">
            Browse our wide selection of electronics and find the perfect promo
            for you from newsletter.
          </p>
          <input
            className="w-[494px] bg-white border border-[#303030] opacity-50 rounded-lg py-6 px-6 mb-4"
            type="text"
            placeholder="Enter your email address ..."
          />
          <br />
          <Button text="Subscribe" />
        </div>
      </Container>
    </div>
  );
}

export default FooterTop