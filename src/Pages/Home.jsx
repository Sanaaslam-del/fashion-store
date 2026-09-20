
import { useState } from "react";

import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones
} from "lucide-react";

function Home({ setCart }) {
 const [email, setEmail] = useState("");
  return (
    <div>

      {/*  HERO*/}
      <div className="relative w-full h-[570px] overflow-hidden">

        {/* Background */}
        <img
          src="/Herobackground.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left Content */}
        <div className="relative z-20 flex h-full items-center">
          <div className="ml-[8%] w-[43%]">

            <p className="mb-5 text-[11px] font-medium tracking-[4px] uppercase text-[#3A2118]">
              NEW SEASON COLLECTION
            </p>

            <h1 className="font-serif text-[58px] font-semibold leading-[1.02] tracking-[-1px] text-[#17110e]">
              Elevate Your
              <br />
              Style Game
            </h1>

            <p className="mt-6 max-w-[450px] text-[14px] leading-6 text-[#4b4541]">
              Discover the latest trends in fashion. Premium quality,
              modern designs and styles for every occasion.
            </p>

            <button
              className="mt-8 rounded-full bg-[#3A2118] px-8 py-3.5 text-[13px] font-medium text-white shadow-sm transition duration-300 hover:bg-[#2A1711] hover:-translate-y-0.5"
            >
              Shop Now →
            </button>

          </div>
        </div>

        {/* Foreground */}
        <img
          src="/foreground.png"
          alt="Fashion Model"
          className="absolute bottom-0 right-[3%] z-10 h-[99%] w-auto object-contain"
        />

      </div>


      {/*  FEATURES  */}
      <section className="w-full border-r border-gray-200 bg-[#faf9f7] py-7">

        <div className="mx-auto flex w-[85%] items-center justify-between">

          {/* Free Shipping */}
          <div className="flex items-center gap-4 border-r border-gray-200 pr-10">

            <Truck size={30} strokeWidth={1.5} />

            <div>
              <h3 className="text-sm font-semibold text-[#17110e]">
                Free Shipping
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                On orders over $50
              </p>
            </div>

          </div>


          {/* Secure Payment */}
          <div className="flex items-center gap-4 border-r border-gray-200 pr-10">

            <ShieldCheck size={30} strokeWidth={1.5} />

            <div>
              <h3 className="text-sm font-semibold text-[#17110e]">
                Secure Payment
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                100% secure checkout
              </p>
            </div>

          </div>


          {/* Easy Returns */}
          <div className="flex items-center gap-4 border-r border-gray-200 pr-10">

            <RotateCcw size={30} strokeWidth={1.5} />

            <div>
              <h3 className="text-sm font-semibold text-[#17110e]">
                Easy Returns
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                30 days return policy
              </p>
            </div>

          </div>


          {/* 24/7 Support */}
          <div className="flex items-center gap-4">

            <Headphones size={30} strokeWidth={1.5} />

            <div>
              <h3 className="text-sm font-semibold text-[#17110e]">
                24/7 Support
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                We're here to help
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}
      <section className="w-full bg-[#faf9f7] py-7 px-[6%]">

        {/* Heading */}
        <div className="flex items-start justify-between mb-5">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Featured Products
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              Best selling items, handpicked for you
            </p>
          </div>

          <button className="text-xs font-medium text-gray-800 flex items-center gap-2 mt-3 hover:underline">
            View All Products
            <span className="text-base">
              →
            </span>
          </button>

        </div>


        {/* Product Cards */}
        <div className="grid grid-cols-5 gap-5">

          {/* Product 1 */}
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden">

            <div className="relative bg-[#f3eee8] h-55 flex items-center justify-center">

              <img
                src="girl.png"
                alt="Classic Trench Coat"
                className="w-full h-full object-contain"
              />

              <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-700 text-sm shadow-sm">
                ♡
              </button>

            </div>

            <div className="p-3">

              <p className="text-[10px] text-gray-500">
                Women
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mt-1">
                Classic Trench Coat
              </h3>

              <div className="flex items-center gap-2 mt-1.5">

                <span className="text-sm font-bold text-gray-900">
                  $89.00
                </span>

                <span className="text-[10px] text-gray-400 line-through">
                  $120.00
                </span>

              </div>

              <div className="text-yellow-500 text-[11px] mt-1">
                ★★★★★
                <span className="text-gray-500 ml-1">
                  (4.8)
                </span>
              </div>

 <button
  onClick={() =>
    setCart((prevCart) => [
      ...prevCart,
      {
        name: "Classic Trench Coat",
        price: 89,
        image: "/girl.png",
      },
    ])
  }
  className="w-full bg-black text-white text-[11px] py-2.5 rounded mt-3 hover:bg-gray-800"
>
  Add to Cart


</button> 


            </div>

          </div>


          {/* Product 2 */}
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden">

            <div className="relative bg-[#f3eee8] h-55 flex items-center justify-center">

              <img
                src="mens.png"
                alt="Varsity Jacket"
                className="w-full h-full object-contain"
              />

              <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-700 text-sm shadow-sm">
                ♡
              </button>

            </div>

            <div className="p-3">

              <p className="text-[10px] text-gray-500">
                Men
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mt-1">
                Varsity Jacket
              </h3>

              <div className="flex items-center gap-2 mt-1.5">

                <span className="text-sm font-bold text-gray-900">
                  $69.00
                </span>

                <span className="text-[10px] text-gray-400 line-through">
                  $95.00
                </span>

              </div>

              <div className="text-yellow-500 text-[11px] mt-1">
                ★★★★★
                <span className="text-gray-500 ml-1">
                  (4.6)
                </span>
              </div>

<button
  onClick={() => {
    setCart((prevCart) => [
      ...prevCart,
      {
        name: "Varsity Jacket",
        price: 69,
        image: "/mens.png",
      },
    ]);
  }}
  className="w-full bg-black text-white text-[11px] py-2.5 rounded mt-3 hover:bg-gray-800"
>
  Add to Cart
</button>

            </div>

          </div>


          {/* Product 3 */}
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden">

            <div className="relative bg-[#f3eee8] h-55 flex items-center justify-center">

              <img
                src="floral.png"
                alt="Floral Midi Dress"
                className="w-full h-full object-contain"
              />

              <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-700 text-sm shadow-sm">
                ♡
              </button>

            </div>

            <div className="p-3">

              <p className="text-[10px] text-gray-500">
                Women
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mt-1">
                Floral Midi Dress
              </h3>

              <div className="flex items-center gap-2 mt-1.5">

                <span className="text-sm font-bold text-gray-900">
                  $59.00
                </span>

                <span className="text-[10px] text-gray-400 line-through">
                  $65.00
                </span>

              </div>

              <div className="text-yellow-500 text-[11px] mt-1">
                ★★★★★
                <span className="text-gray-500 ml-1">
                  (4.7)
                </span>
              </div>

<button
  onClick={() => {
    setCart((prevCart) => [
      ...prevCart,
      {
        name: "Floral Midi Dress",
        price: 59,
        image: "/floral.png",
      },
    ]);
  }}
  className="w-full bg-black text-white text-[11px] py-2.5 rounded mt-3 hover:bg-gray-800"
>
  Add to Cart
</button>

            </div>

          </div>


          {/* Product 4 */}
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden">

            <div className="relative bg-[#f3eee8] h-55 flex items-center justify-center">

              <img
                src="white.png"
                alt="White Sneakers"
                className="w-full h-full object-contain"
              />

              <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-700 text-sm shadow-sm">
                ♡
              </button>

            </div>

            <div className="p-3">

              <p className="text-[10px] text-gray-500">
                Shoes
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mt-1">
                White Sneakers
              </h3>

              <div className="flex items-center gap-2 mt-1.5">

                <span className="text-sm font-bold text-gray-900">
                  $49.00
                </span>

                <span className="text-[10px] text-gray-400 line-through">
                  $70.00
                </span>

              </div>

              <div className="text-yellow-500 text-[11px] mt-1">
                ★★★★★
                <span className="text-gray-500 ml-1">
                  (4.5)
                </span>
              </div>

<button
  onClick={() => {
    setCart((prevCart) => [
      ...prevCart,
      {
        name: "White Sneakers",
        price: 49,
        image: "/white.png",
      },
    ]);
  }}
  className="w-full bg-black text-white text-[11px] py-2.5 rounded mt-3 hover:bg-gray-800"
>
  Add to Cart
</button>

            </div>

          </div>


          {/* Product 5 */}
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden">

            <div className="relative bg-[#f3eee8] h-55 flex items-center justify-center">

              <img
                src="bags.png"
                alt="Leather Handbag"
                className="w-full h-full object-contain"
              />

              <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-700 text-sm shadow-sm">
                ♡
              </button>

            </div>

            <div className="p-3">

              <p className="text-[10px] text-gray-500">
                Bags
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mt-1">
                Leather Handbag
              </h3>

              <div className="flex items-center gap-2 mt-1.5">

                <span className="text-sm font-bold text-gray-900">
                  $79.00
                </span>

                <span className="text-[10px] text-gray-400 line-through">
                  $110.00
                </span>

              </div>

              <div className="text-yellow-500 text-[11px] mt-1">
                ★★★★★
                <span className="text-gray-500 ml-1">
                  (4.8)
                </span>
              </div>

<button
  onClick={() => {
    setCart((prevCart) => [
      ...prevCart,
      {
        name: "Leather Handbag",
        price: 79,
        image: "/bags.png",
      },
    ]);
  }}
  className="w-full bg-black text-white text-[11px] py-2.5 rounded mt-3 hover:bg-gray-800"
>
  Add to Cart
</button>

            </div>

          </div>

        </div>

      </section>


      {/*  PROMO BANNER  */}
      <section className="w-full bg-[#faf9f7] px-[6%] pt-5">

        <div className="relative w-full h-[145px] rounded-md overflow-hidden bg-[#f3ddd0]">

          <img
            src="sale-banner.png"
            alt="Fashion Sale"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex flex-col justify-center h-full px-8">

            <h2 className="text-2xl font-serif font-semibold text-gray-900">
              UP TO 50% OFF
            </h2>

            <p className="text-sm text-gray-800 mt-1">
              Selected Fashion Items
            </p>

            <button className="mt-3 w-fit bg-black text-white text-[10px] px-5 py-2 rounded hover:bg-gray-800">
              Shop Sale →
            </button>

          </div>

        </div>

      </section>


      {/*  TRUSTED BRANDS  */}
      <section className="w-full bg-[#faf9f7] px-[6%] pt-5 pb-4">

        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          Our Trusted Brands
        </h3>

        <div className="flex items-center justify-between px-5">

          <div className="text-xl font-serif font-semibold tracking-wide text-gray-700">
            ZARA
          </div>

          <div className="text-xl font-bold text-gray-700">
            H&M
          </div>

          <div className="text-xl font-bold italic text-gray-700">
            NIKE
          </div>

          <div className="text-xl font-bold text-gray-700">
            adidas
          </div>

          <div className="text-xl font-bold text-gray-700">
            PUMA
          </div>

          <div className="text-xl font-bold text-gray-700">
            Levi's
          </div>

          <div className="text-lg font-semibold tracking-tight text-gray-700">
            Calvin Klein
          </div>

        </div>

      </section>

{/*  NEWSLETTER  */}
<section className="w-full bg-[#faf9f7] px-[6%] py-5">
  <div className="w-full bg-[#f5eee8] rounded-md px-8 py-5">
    <div className="flex items-center justify-between gap-8">

      <div>
        <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
          Stay IN THE LOOP
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-1">
          Subscribe to our newsletter
        </h2>

        {/* Missing line added */}
        <p className="text-[10px] text-gray-600 mt-1">
          Get the latest updates, new arrivals and exclusive offers.
        </p>
      </div>

      <div>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[280px] h-9 px-3 text-[10px] bg-white border border-gray-200 outline-none rounded-l"
          />

          <button
            onClick={() => {
              localStorage.setItem("subscriberEmail", email);
              alert(localStorage.getItem("subscriberEmail"));
            }}
            className="h-9 bg-black text-white px-5 text-[10px] rounded-r hover:bg-gray-800"
          >
            Subscribe
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 mt-3 text-gray-800 text-[11px]">
          <span className="cursor-pointer hover:text-gray-500">f</span>
          <span className="cursor-pointer hover:text-gray-500">◎</span>
          <span className="cursor-pointer hover:text-gray-500">𝕏</span>
          <span className="cursor-pointer hover:text-gray-500">▶</span>
          <span className="cursor-pointer hover:text-gray-500">●</span>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}

export default Home;