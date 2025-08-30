import { Link } from 'react-router-dom';
import BannerImg from '../../../src/assets/images/banner.png';
import Container from '../utils/Container';



const Banner = () => {
  return (
    <section className='mt-8 mb-20'>
      <Container>
        <Link to='/'>
          <img src={BannerImg}/>
        </Link>
      </Container>
    </section>
  );
}

export default Banner