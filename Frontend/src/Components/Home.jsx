import React from 'react'
import './Home.css';
const Home = () => {
  return (

    <>
      {/* <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Discover the Beauty of Clay</h1>
      <p class="hero-subtitle">Eco-Friendly Utensils & Home Decor</p>
      <a href="#" class="hero-btn">Shop Now</a>
    </div>
  </section> */}
      {/* main */}

      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: "75vh" }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://www.euroschoolindia.com/wp-content/uploads/2023/06/clay-modelling-art-for-kids.jpg")'
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            />
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                <div className="w-100">
                  <h1 className="text-white font-semibold text-5xl">
                    Discover the Beauty of Clay
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Mitti Mahal offers a unique retreat where nature meets luxury.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: 70 }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-gem" />
                    </div>
                    {/* <h6 className="text-xl font-semibold">Awarded Agency</h6> */}
                    <p className="mt-2 mb-4 text-black font-semibold">
                      An online platform for selling handmade clay products,
                      utensils, water containers, decorative items.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-cart-shopping" />
                    </div>
                    {/* <h6 className="text-xl font-semibold">Free Revisions</h6> */}
                    <p className="mt-2 mb-4 text-black font-semibold">
                      More than just a store, it offers a curated experience with easy buying options.

                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-users" />
                    </div>
                    {/* <h6 className="text-xl font-semibold">Verified Company</h6> */}
                    <p className="mt-2 mb-4 text-black font-semibold">
                      Benefits artisans by providing global exposure & expanding their customer base ,
                      support and fair compensation

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mb-auto mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-semibold leading-relaxed mt-4 mb-4 text-gray-700">
                  We emphasizes Mitti Mahal's commitment to empowering small artisans through e-commerce, facilitating their growth, and promoting ethical consumption practices while preserving traditional craftsmanship and cultural heritage.

                </p>
              </div>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://media.istockphoto.com/id/1361114024/vector/potter-girl-a-woman-sculpts-a-clay-vase-behind-a-potters-wheel.jpg?s=612x612&w=0&k=20&c=g3nnQN5oRPFu0lZfzY3fhTjs_cXe38uTfSzmhOluUbk="
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{ height: 95, top: "-94px" }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      />
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the sea-ice
                      then thaws every summer, and that process will continue whatever
                      happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: 80 }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full  rounded-lg shadow-lg"
                  src="https://media.istockphoto.com/id/1566668756/vector/sneer-in-hindi-it-is-called-thathera.jpg?s=612x612&w=0&k=20&c=UDSYwGutvDKBKBPO5WFswk2S7XloeNcsPpi7kDt9FHk=">
                </img>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl" />
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Mitti Mahal endeavors to create a positive impact on the lives of small artisans, customers, communities, and the environment, fostering a more inclusive, sustainable, and culturally rich society.
                    We emphasizes Mitti Mahal's commitment to empowering small artisans through e-commerce, facilitating their growth, and promoting ethical consumption practices while preserving traditional craftsmanship and cultural heritage.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-products">
          <div className="container">
            <h2 className="section-title">Top Selling Products</h2>
            <div className="product-grid">
              <div className="product-item">
                <img src="Product1.jpg" alt="Product 1" />
                <h3 className="product-title">Clay Cooking Pot</h3>
                <p className="product-price"> ₹ 249.99</p>
              </div>
              {/* <div className="product-item">
          <img src="Product2.jpg" alt="Product 2" />
          <h3 className="product-title">Decorative Clay Vase</h3>
          <p className="product-price">₹199.99</p>
        </div> */}


              {/* Top Selling Items */}

              <div className="product-item">
                <img src="ClayContainer.jpg" alt="Product 3" />
                <h3 className="product-title">Water Container</h3>
                <p className="product-price">₹149.99</p>
              </div>
              <div className="product-item">
                <img src="Product4.jpg" alt="Product 4" />
                <h3 className="product-title">Tea Cup</h3>
                <p className="product-price"> ₹49.99</p>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: 80 }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
          {/* <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-white">Build something</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 justify-center">
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-medal text-xl" />
          </div>
          <h6 className="text-xl mt-5 font-semibold text-white">
            Excelent Services
          </h6>
          <p className="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-poll text-xl" />
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">
            Grow your market
          </h5>
          <p className="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-lightbulb text-xl" />
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">Launch time</h5>
          <p className="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div> */}
        </section>
      </main>


      {/* main */}

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src="Product1.jpg" alt="Product 1" />
              <h3 className="product-title">Clay Cooking Pot</h3>
              <p className="product-price"> ₹ 249.99</p>
            </div>
            <div className="product-item">
              <img src="Product2.jpg" alt="Product 2" />
              <h3 className="product-title">Decorative Clay Vase</h3>
              <p className="product-price">₹199.99</p>
            </div>
            <div className="product-item">
              <img src="wallhanging.jpg" alt="Product 3" />
              <h3 className="product-title">Wall Hanging</h3>
              <p className="product-price">₹449.99</p>
            </div>
            <div className="product-item">
              <img src="Product4.jpg" alt="Product 4" />
              <h3 className="product-title">Tea Cup</h3>
              <p className="product-price"> ₹ 249.99</p>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products">
        <div className="container">
          <div className="product-grid">
            <div className="product-item">
              <img src="ClayContainer.jpg" alt="Product 1" />
              <h3 className="product-title">Water Container</h3>
              <p className="product-price"> ₹ 249.99</p>
            </div>
            <div className="product-item">
              <img src="Jug.jpg" alt="Product 2" />
              <h3 className="product-title">Decorative Clay Vase</h3>
              <p className="product-price">₹199.99</p>
            </div>
            <div className="product-item">
              <img src="water_bottle.jpg" alt="Product 3" />
              <h3 className="product-title">Mud House</h3>
              <p className="product-price">₹449.99</p>
            </div>
            <div className="product-item">
              <img src="Diya.jpg" alt="Product 4" />
              <h3 className="product-title">Clay Diya</h3>
              <p className="product-price"> ₹ 249.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content of the website */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Contact Us</h3>
              <p>123 Street Name, City, Country</p>
              <p>Phone: +123 456 789</p>
              <p>Email: info@clayworks.com</p>
            </div>
            <div className="footer-column">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Subscribe to Our Newsletter</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email Address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>

    </>


  )
}

export default Home