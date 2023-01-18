import React, { useState,useEffect } from "react";
import DrugstoreForm from "./DrugstoreForm";
const ProductForm = (props) => {
  const [showCategory, setSHowCategory] = useState(true);
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showContinue,setShowContinue] = useState(false)
  const [category,setCategory]=useState('')
  const handleProductClick = props.handleProductClick;
  const setBrandName = props.setBrandName;
  const [brand,setBrand] = useState('')
  const [product,setProduct] = useState('')
  const handleBClick = props.back
  const handleCategoryClick = (e)=> {
    setCategory(e.target.value)
    setSHowCategory(false)
    setShowProductInfo(true)
  }
  const handleBackClick = (e)=>{
    setSHowCategory(true)
    setShowProductInfo(false)
  }
  const saveBrandName = (e)=>{
    setBrand(e.target.value)
  }
  const saveProductName= (e)=>{
    setProduct(e.target.value)
  }

  useEffect(()=>{
    if(product.length>3&&brand.length>3){
      setShowContinue(true)
    }
  },[product,brand])
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
              onChange={saveBrandName}
            ></input>
            <input
              type="text"
              className="p-2 m-2 border-2 rounded-xl drop-shadow-xl text-black text-center"
              placeholder="პროდუქტი"
              onChange={saveProductName}
            ></input>
            </div>
            <button className="bg-light-red p-2 m-2 rounded-xl" onClick={handleBackClick}>უკან დაბრუნება</button>
          </div>
        )}
        
        {showContinue&&category==='აფთიაქი'&&

        <DrugstoreForm handleProductClick={props.handleProductClick}/>
        

        }
        {showContinue && category!='აფთიაქი'&&<button
          className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2"
          value="კატეგორია"
          onClick={handleProductClick}
        >
          გაგრძელება
        </button>}
        {showCategory&&
        <button className="bg-light-red p-2 m-2 rounded-xl" onClick={handleBClick}>უკან დაბრუნება</button>
        }
      </div>
    </div>
  );
};
export default ProductForm;
