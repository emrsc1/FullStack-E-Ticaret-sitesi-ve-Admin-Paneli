
import Header from '../Layout/Header'
import Slider from '../Slider/sliders'
import Categories from '../Layout/Categories'
import Products from '../Layout/Products'
import Campaigns from '../Layout/Campaigns'
import Blogs from '../Layout/Blogs'
import Brands from '../Layout/Brands'
import CampaignSingle from '../Layout/CampaignSingle'
import Policy from '../Layout/Policy'
import Footer from '../Layout/Footer'
const HomePage = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <Categories/>
    <Products/>
    <Campaigns/>
    <Blogs/>
    <Brands/>
    <CampaignSingle/>
    <Policy/>
    <Footer/>
    </>
  )
}

export default HomePage