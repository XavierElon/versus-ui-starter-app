import React from "react";

function Features() {

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16 dark:bg-black" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="bg-red-600 pt-10 rounded-2xl dark:bg-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2">Bet, Stake, and play Versus other players, to prove you are the best...</h1>
            </div>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6 ">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 my-5 mx-5">Currently Versus Is Supported On The Following Platforms...</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;