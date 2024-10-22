import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text text-green-300">
              Buy the products at the lowest price here:
              {/* <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              /> */}
            </p>

            <h1 className="head-text">
              Your Personal Price Tracker
              <span className="text-green-500"> DealDigger</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve web scraping
              tool to find the best deals online. DealDigger helps you
              effortlessly compare prices and save more, ensuring you always get
              the lowest prices. Discover unbeatable deals with ease and
              transform your shopping experience with DealDigger.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text text-center">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
