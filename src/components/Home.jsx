import Story from './me';
import MoveWithMeSection from './movewithme';
import PartnershipsSection from './ParternerShip';
import ShopSection from './ShopSection';
import TalksSection from './talksPodcastsSection';
import SplashHero from './SplashHero';
import Footer from './Footer';

import MyNavbar from '../components/Navbar';
import LatestUpdate from './LatestUpdate';
import ExploreSection from './ExploreSection';
import TalksPodcastsSection from './talksPodcastsSection';

const Home = () => {
  return (
    <div className="bg-black">
      {/* <MyNavbar /> */}
      <SplashHero></SplashHero>
      <LatestUpdate />
      <Story />
      <ExploreSection />

      {/* <MoveWithMeSection /> */}
      <ShopSection />
      <TalksPodcastsSection />
      {/* <TalksSection /> */}
      {/* <Footer /> */}
      {/* <PartnershipsSection />  */}
    </div>
  );
};

export default Home;
