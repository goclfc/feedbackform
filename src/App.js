import React,{useState} from "react";
import About from "./components/About";
import AgeForm from "./components/AgeForm";
import CallCenter from "./components/CallCenter";
import ChooseAnonim from "./components/ChooseAnonim";
import DrugstoreForm from "./components/DrugstoreForm";
import MoreInfo from "./components/MoreInfo";
import OnlineStore from "./components/OnlineStore";
import ProductForm from "./components/ProductForm";
import ServiceForm from "./components/ServiceForm";

function App() {
  const [showSelectForm,setShowSelectForm] = useState(true)
  const [showAgeForm,setShowAgeForm] = useState(false)
  const [showAbout,setShowAbout] = useState(false)
  const [showProductForm,setShowProductForm] = useState(false)
  const [showMoreInfo,setShowMoreInfo] = useState(false)
  const [showServiceForm,setShowServiceForm] = useState(false)
  const [showDrugstore,setShowDrugstore] = useState(false)
  const [showOnlinetore,setShowOnlinestore] = useState(false)
  const [showCallcenter,setShowCallcenter] = useState(false)
  const handleAnonimClick = ()=>{
    setShowSelectForm(false)
    setShowAgeForm(true)
  }
  const handleAgeClick = (e)=>{
    console.log(e.target.value)
    setShowAgeForm(false)
    setShowAbout(true)
  }
  const handleSkipClick = ()=>{
    setShowAgeForm(false)
    setShowAbout(true)
  }
  const handleAboutClick = (e)=>{
    console.log(e.target.value)
    setShowAbout(false)
    if(e.target.value==='პროდუქცია'){

      setShowProductForm(true)
    }else if(e.target.value==='მომსახურება'){
      setShowServiceForm(true)
    }
  }
  const handleServiceClick = (e)=>{
    console.log(e.target.value)
    setShowServiceForm(false)
    if(e.target.value==='სააფთიაქო სერვისი'){
      setShowDrugstore(true)
    }else if(e.target.value==='ონლაინ გაყიდვები'){
      setShowOnlinestore(true)
    }else if(e.target.value==='ქოლ ცენტრი'){
      setShowCallcenter(true)
    }
  }
  const handleProductClick =(e)=>{
    console.log(e.target.value)
    setShowProductForm(false)
    setShowMoreInfo(true)
  }
  return (
    <div className="wrapper w-full h-screen bg-white flex flex-wrap justify-center bg-niceBg">
      <div className="w-full flex flex-col items-center drop-shadow-xl rounded-xl bg-readableBg md:w-1/3 "> 
      <div className="header flex w-full justify-center m-2 p-2">
        <h1 className="text-3xl text-white">საკონტაქტო ფორმა</h1>
      </div>
      <div className="header flex w-full justify-center m-2 p-2">
        <h2 className="text-2xl text-white">მადლობას გიხდით უკუკავშირისთვის</h2>
      </div>
      <div className="header flex w-full justify-center m-2 p-2">
        <h2 className="text-2xl text-white">გთხოვთ, შეავსეთ ფორმა</h2>
      </div>
      <div className='form bg-formBg text-white border-2 rounded-xl m-2 p-2'>
      {showSelectForm && <ChooseAnonim handleAnonimClick={handleAnonimClick} /> }
      {showAgeForm && <AgeForm handleAgeClick={handleAgeClick} handleSkipClick={handleSkipClick}/>  }
      {showAbout && <About handleAboutClick={handleAboutClick} />}
      {showProductForm && <ProductForm handleProductClick={handleProductClick}/>}
      {showServiceForm && <ServiceForm handleServiceClick = {handleServiceClick}/> }
      {showDrugstore&& <DrugstoreForm handleProductClick={handleProductClick}/>}
      {showOnlinetore&& <OnlineStore />}
      {showCallcenter&& <CallCenter />   }
      {showMoreInfo && <MoreInfo />
      }
       </div>
      </div>
    </div>
  );
}

export default App;
