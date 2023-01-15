import React, { useState } from "react";
const ProductForm = (props) => {
  const [showCategory, setSHowCategory] = useState(true);
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showContinue,setShowContinue] = useState(false)
  const [category,setCategory]=useState('')
  const handleProductClick = props.handleProductClick;
  const setBrandName = props.setBrandName;
  const handleCategoryClick = (e)=> {
    setCategory(e.target.value)
    setSHowCategory(false)
    setShowProductInfo(true)
  }
  const handleBackClick = (e)=>{
    setSHowCategory(true)
    setShowProductInfo(false)
  }
  return (
    <div className="form w-full flex flex-col items-center m-2">
      {/* <div className="question text-xl p-2">გთხოვთ აირჩიეთ ბრენდი</div> */}
      <div className="answer flex flex-col items-center">
        {showCategory && (
          <div className="category flex flex-col items-center">
            <h2>გთხოვთ აირჩიეთ პროდუქტის შეძენის გზა</h2>
            <div>
            <button className="p-2 m-2 rounded-xl bg-green" value='აფთიაქი' onClick={handleCategoryClick}>აფთიაქი</button>
            <button className="p-2 m-2 rounded-xl bg-green" value='ონლაინ მაღაზია' onClick={handleCategoryClick}>ონლაინ მაღაზია</button>
            <button className="p-2 m-2 rounded-xl bg-green" value='გლოვო' onClick={handleCategoryClick}>გლოვო</button>
            <button className="p-2 m-2 rounded-xl bg-green" value='ვოლტი' onClick={handleCategoryClick}>ვოლტი</button>
            </div>
          </div>
        )}
        {showProductInfo && (
          <div className="product-info flex flex-col items-center">
            <h2> გთხოვთ შეავსეთ ინფორმაცია პროდუქტზე</h2>
            <div>
            <button className="p-2 m-2 rounded-xl bg-green" value='მედიკამენტი'>მედიკამენტი</button>
            <button className="p-2 m-2 rounded-xl bg-green" value='არამედიკამენტი'>არამედიკამენტი</button>
            </div>
            <div>
            <input
              type="text"
              className="p-2 m-2 border-2 rounded-xl drop-shadow-xl text-black text-center"
              placeholder="ბრენდი"
            ></input>
            <input
              type="text"
              className="p-2 m-2 border-2 rounded-xl drop-shadow-xl text-black text-center"
              placeholder="პროდუქტი"
            ></input>
            </div>
            <button className="bg-light-red p-2 m-2 rounded-xl" onClick={handleBackClick}>უკან დაბრუნება</button>
          </div>
        )}
        {showContinue&&
        <button
          className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2"
          value="კატეგორია"
          onClick={handleProductClick}
        >
          გაგრძელება
        </button>
        }
      </div>
    </div>
  );
};
export default ProductForm;
