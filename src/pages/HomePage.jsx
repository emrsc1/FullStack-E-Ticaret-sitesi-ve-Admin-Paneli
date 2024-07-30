
import Slider from '../components/Slider/sliders';
import Categories from '../components/Layout/Categories';
import Products from '../components/Layout/Products';
import Campaigns from '../components/Layout/Campaigns';
import Blogs from '../components/Layout/Blogs';
import Brands from '../components/Layout/Brands';
import CampaignSingle from '../components/Layout/CampaignSingle';
import Policy from '../components/Layout/Policy';

const HomePage = () => {
  return (
    <>

    <Slider/>
    <Categories/>
    <Products/>
    <Campaigns/>
    <Blogs/>
    <Brands/>
    <CampaignSingle/>
    <Policy/>

    </>
  )
}

export default HomePage