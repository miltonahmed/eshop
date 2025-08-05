import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../utils/Container";

const Navbar = () => {
  return (
    <section className="bg-bg-primary">
      <Container>
        <nav className="flex justify-between py-6">
          <div className="">
            <ul className="flex items-center gap-[80px]  text-white text-base font-bold font-montserrat leading-6 ">
              <li>
                <Link to={'#'} className="flex items-center gap-x-4">
                  {' '}
                  <FaBars />
                  All Categories
                </Link>
              </li>
              <li>
                <Link to={'#'}>Products</Link>
              </li>
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-[80px]  text-white text-base font-bold font-montserrat leading-6 ">
              <li>
                <Link to={'#'}>LIMITED SALE 👋🏻</Link>
              </li>
              <li>
                <Link to={'/blog'}>Best Seller</Link>
              </li>
              <li>
                <Link to={'/contact'}>New Arrival</Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </section>
  );
}

export default Navbar