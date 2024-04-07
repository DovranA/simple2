import TopLink from "../../components/TopLink/TopLink";
import Slider from "../Home/components/slider/Slider";
import FilterNav from "./components/FilterNav";

const Brands = () => {
  const image = [{ src: "/card1.png" }, { src: "/card1.png" }];

  return (
    <div className="container">
      <TopLink location="Brendlar" />
      <FilterNav />
      <Slider image={image} />
    </div>
  );
};

export default Brands;
