import React from "react";

const Cart: React.FC = () => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font overflow-hidden">
      <div
        className="container px-5 py-24 mx-auto"
        style={{ minHeight: "87.2vh" }}
      >
        <div className="-my-8">
          <header className="text-gray-500 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <h1 className="flex-grow sm:pr-16 text-5xl font-medium title-font text-white lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                Cart
              </h1>
              <div className="md:ml-auto flex flex-wrap items-center text-base justify-center mt-10">
                <button
                  className={
                    "flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg sm:mt-0 ml-20"
                  }
                >
                  Order Now
                </button>
              </div>
            </div>
          </header>
          <div className="py-8 flex flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-white">
                Rs. [Cart Item Price]
              </span>
              <span className="mt-1 text-gray-600 text-sm">
                Cart Item Quantity
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Cart Item Name
              </h2>
              <p className="leading-relaxed">Cart Item Description</p>
            </div>
          </div>

          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-white">
                Rs. [Cart Item Price]
              </span>
              <span className="mt-1 text-gray-600 text-sm">
                Cart Item Quantity
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                Cart Item Name
              </h2>
              <p className="leading-relaxed">Cart Item Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
