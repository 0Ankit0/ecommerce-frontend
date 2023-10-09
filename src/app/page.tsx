import Image from "next/image";
import ChatBtm from "./Components/ChatBtn";
import Slider from "./Components/Slider";
import Card from "./Components/Cards";
import ProductContextProvider from "./Components/ProductContext";
import CategoryCard from "./(Category)/CategorySidebar";

export default function Home() {
  return (
    <main>
      <ProductContextProvider>
        <div className="flex px-2 md:px-12 py-4 gap-4">
          <CategoryCard></CategoryCard>
          <Slider></Slider>
        </div>
        <Card title="Home Appliances"></Card>
      </ProductContextProvider>
      <ChatBtm></ChatBtm>
      {/* <Product_card></Product_card> */}
    </main>
  );
}
