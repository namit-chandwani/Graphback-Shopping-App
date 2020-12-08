import React from "react";

const Orders: React.FC = () => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font overflow-hidden">
      <div
        className="container px-5 py-24 mx-auto"
        style={{ minHeight: "87.2vh" }}
      >
        <div className="-my-8">
          <h1 className="flex-grow sm:pr-16 text-5xl font-medium title-font text-white lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            Orders
          </h1>
          <div className="py-8 flex flex-wrap md:flex-no-wrap mt-10">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-white">
                Date Placed:
              </span>
              <span className="mt-1 text-gray-400 text-sm">
                [Order Date Placed]
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-light text-white title-font mb-2">
                Products ordered:
              </h2>
              <ul>
                <li className="leading-relaxed font-medium">Cart Item Name</li>
                <li className="leading-relaxed font-medium">Cart Item Name</li>
                <li className="leading-relaxed font-medium">Cart Item Name</li>
              </ul>
            </div>
          </div>

          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-white">
                Date Placed:
              </span>
              <span className="mt-1 text-gray-400 text-sm">
                [Order Date Placed]
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-light text-white title-font mb-2">
                Products ordered:
              </h2>
              <ul>
                <li className="leading-relaxed font-medium">Cart Item Name</li>
                <li className="leading-relaxed font-medium">Cart Item Name</li>
                <li className="leading-relaxed font-medium">Cart Item Name</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
