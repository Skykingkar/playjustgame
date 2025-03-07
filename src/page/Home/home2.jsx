import React from "react";
import ProductCard from "../../component/CardHome2";
import Image1 from "../../assets/Home2/Rectangle 399-1.svg";
import Image2 from "../../assets/Home2/Rectangle 399-2.svg";
import Image3 from "../../assets/Home2/Rectangle 399-3.svg";
import Image4 from "../../assets/Home2/Rectangle 399-4.svg";
import Image5 from "../../assets/Home2/Rectangle 399-5.svg";
import Image6 from "../../assets/Home2/Rectangle 399-6.svg";
import Image7 from "../../assets/Home2/Rectangle 399.svg";
import Image8 from "../../assets/Home2/Rectangle 3991.svg";

const App = () => {
  const productData = [
    {
      image: Image1,
      name: "Period Problems?",
      price: 100,
      discount: "Male",
    },
    {
      image: Image2,
      name: "Performance issue in Bed?",
      price: 200,
      discount: "",
    },
    {
      image: Image3,
      name: "Skin Problem?",
      price: 150,
      discount: "Female",
    },
    {
      image: Image4,
      name: "Cough & cold?",
      price: 120,
      discount: "",
    },
    {
      image: Image5,
      name: "Stomach problem?",
      price: 180,
      discount: "",
    },
    {
      image: Image6,
      name: "Period Problems?",
      price: 100,
      discount: "Male",
    },
    {
      image: Image7,
      name: "Performance issue in Bed?",
      price: 200,
      discount: "",
    },
    {
      image: Image8,
      name: "Skin Problem?",
      price: 150,
      discount: "Female",
    },
    {
      image: Image7,
      name: "Cough & cold?",
      price: 120,
      discount: "",
    },
    {
      image: Image7,
      name: "Stomach problem?",
      price: 180,
      discount: "",
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-white">
      {/* Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-8">
        {/* Left Column - Align Text to Start */}
        <div className="flex flex-col items-start justify-center text-left">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Consult doctors based on symptom
          </h2>
          <p className="text-gray-600">Click to find nearby doctor clinic</p>
        </div>

        {/* Right-aligned button */}
        <div className="flex justify-end items-center p-8">
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-200">
            View all specialists
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onAdd={() => handleAddToCart(product.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
