import Container from '../../utils/Container';
import TopBarLeft from './TopBarLeft';
import TopBarRight from './TopBarRight';

const TopBar = () => (
  <>
    <div className="border-b border-[#330033] py-[22px]">
      <Container>
        <div className=" flex justify-between items-center font-montserrat text-sm  font-normal leading-5">
          <TopBarLeft />
          <TopBarRight />
        </div>
      </Container>
    </div>
  </>
);

export default TopBar;
