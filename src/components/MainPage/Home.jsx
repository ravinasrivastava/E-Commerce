import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
// import Contact from "./Contact"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
          {/* <Contact/> */}
        </div>
      </section>
    </>
  )
}
export default Home;