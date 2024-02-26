import Header from '../Header'
import { FaArrowRight } from "react-icons/fa";
import './index.css'

const Home = () => (
  <div className="home-container">
        <Header />
        <div className='content-and-image'>
      <div className="home-page-content">
        <h1 className="home-heading">Digital Marketing Company in Jaipur</h1>
        <p className="home-description">
        digital marketing company in jaipur which provides you services like SEO, SEM, SMM, etc at a minimal cost. If you are looking for an online marketing company in Jaipur to promote your business, then we are here to help you.
        </p>
          <button className="find-jobs-button" type="button">
            More Details
          </button>
          </div>
          <div>
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/306683527/DP/CP/JL/110690830/digital-marketing-service-500x500.png" className='marketing-home-img' />
            </div>
          </div>
          <div className='marketing-container'>
          <h1 className='market-head'>Marketing</h1>
          <div className='images-container'>
            <div className='img-card'>
          <img src="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=1024x1024&w=is&k=20&c=N65ufLsxvt6b5XaKSitmu09gDUhEitFqfM4cWG7CTMk=" className='home-img'/>
          <a href='#'>Read More<FaArrowRight /></a>
          </div>
          <div className='img-card'>
          <img src="https://img.freepik.com/free-photo/man-suit-standing-office-with-clipboard-pointing-poster-with-words_1098-17121.jpg?t=st=1708971407~exp=1708975007~hmac=d5620e5fb77c158b76196dda4fa787ab999f92688aedb3a82b55f6abe8fd14ec&w=740"className='home-img' />
          <a href='#'>Read More<FaArrowRight /></a>
          </div>
          <div className='img-card'>
          <img src="https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?t=st=1708971459~exp=1708975059~hmac=e13206ba5e011aae26788e36e36a984cfccc45fd61e59c394b44598691f5882e&w=740" className='home-img'/>
          <a href='#'>Read More<FaArrowRight /></a>
          </div>
          <div className='img-card'>
          <img src="https://img.freepik.com/free-photo/marketing-online-strategy-with-drawings_1134-76.jpg?t=st=1708971498~exp=1708975098~hmac=c7daf183349e20d69e37f638d6d4d62f20f2ccaebf78c791e4a63d5c6133a65a&w=740" className='home-img'/>
          <a href='#'>Read More<FaArrowRight /></a>
          </div>
          <div className='img-card'>
          <img src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?t=st=1708971534~exp=1708975134~hmac=6ad7c0c07f46d40d69fba637cf86b45304fb92a22ab40b1f2d48473c46fd058e&w=740" className='home-img'/>
          <a href='#'>Read More<FaArrowRight /></a>
          </div>
          <div className='img-card'>
          <img src="https://img.freepik.com/free-photo/bright-technology-display-search-engine-marketing_23-2150783908.jpg?t=st=1708974266~exp=1708977866~hmac=a223f6165ac9f5d1d72ccfedf37492ac4fa34832ddb87d9d479cb6a132d0cf1f&w=360" className='home-img' />
          <a href='#'>Read More<FaArrowRight /></a>
          </div>
          <div className='img-card'>
          <img src="https://img.freepik.com/free-vector/user-research-concept-illustration_114360-21280.jpg?t=st=1708974386~exp=1708977986~hmac=ee9ee406568222798e93942d01ee454f3effbd200bd0b3e3f435a1a60ca18d21&w=740" className='home-img' />
          <a href='#'>Read More<FaArrowRight /></a>
          </div>
          </div>
          </div>
        </div>
)

export default Home