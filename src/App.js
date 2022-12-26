import React,{useState} from "react";

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
    <div className="wrapper w-full h-full bg-white flex flex-wrap justify-start">
      <div className="header flex w-full justify-center m-2 p-2">
        <h1 className="text-3xl">მომხარებლის უკმაყოფილების ფორმა</h1>
      </div>
      {showSelectForm &&      
      <div className="form w-full flex flex-col items-center m-2">
        <div className="question text-xl p-2">აირჩიეთ ფორმა</div>
        <div className="answer">
          <button className="p-2 bg-light-red rounded-xl drop-shadow-xl text-white m-2" value='ანონიმური' onClick={handleAnonimClick}>ანონიმური</button> 
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='დამიკავშირდით' onClick={handleAnonimClick}>მსურს დამიკავშირდეთ</button>
        </div>
     </div>
      }
      {showAgeForm && 
        <div className="form w-full flex flex-col items-center m-2">
          <div className="question text-xl p-2">თქვენი ასაკობრივი ჯგუფი</div>
          <div className="answer">
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='18' onClick={handleAgeClick}> - 18</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='24' onClick={handleAgeClick}>18 - 24</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='34' onClick={handleAgeClick}>25 - 34</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='49' onClick={handleAgeClick}>35 - 49</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='50' onClick={handleAgeClick}>50 + </button>
          </div>
          <button className="p-2 rounded-xl drop-shadow-xl m-2" onClick={handleSkipClick}>გამოტოვება</button>

        </div>
      }
      {showAbout &&
        <div className="form w-full flex flex-col items-center m-2">
          <div className="question text-xl p-2">რას უკავშირდება თქვენი შეფასება</div>
          <div className="answer">
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='პროდუქცია' onClick={handleAboutClick}>პროდუქცია</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='მომსახურება' onClick={handleAboutClick}>მომსახურებას</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ვებ-გვერდი' onClick={handleAboutClick}>ვებ-გვერდს</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სხვა' onClick={handleAboutClick}>სხვა</button>
          </div>

        </div>
      }
      {showProductForm && 
        <div className="form w-full flex flex-col items-center m-2">
          <div className="question text-xl p-2">გთხოვთ აირჩიეთ ბრენდი</div>
          <div className="answer flex flex-col">
            <input type='text' className="p-2 m-2 border-2 rounded-xl drop-shadow-xl" onChange={(e)=>console.log(e.target.value)}></input>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='კატეგორია' onClick={handleProductClick}>გაგრძელება</button>
            
          </div>
        </div>
      }
      {showServiceForm && 
        <div className="form w-full flex flex-col items-center m-2">
          <div className="question text-xl p-2">უფრო კონკრეტულად?</div>
          <div className="answer">
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={handleServiceClick}>სააფთიაქო სერვისი</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ონლაინ გაყიდვები' onClick={handleServiceClick}>ონლაინ გაყიდვები</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ქოლ ცენტრი' onClick={handleServiceClick}>ქოლ ცენტრი</button>
          </div>
        </div>
      }
      {showDrugstore&&
                <div className="form w-full flex flex-col items-center m-2">
                <div className="question text-xl p-2">აირჩიეთ აფთიაქი</div>
                <div className="answer flex flex-col">
                  <label>აფთიაქი</label>
            <input type='text' className="p-2 m-2 border-2 rounded-xl drop-shadow-xl" onChange={(e)=>console.log(e.target.value)}></input>
            <label > ვიზიტის დრო</label>
            <input type='text' className="p-2 m-2 border-2 rounded-xl drop-shadow-xl" onChange={(e)=>console.log(e.target.value)}></input>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='კატეგორია' onClick={handleProductClick}>გაგრძელება</button>
          </div>
              </div>
      }
      {showOnlinetore&&
                <div className="form w-full flex flex-col items-center m-2">
                <div className="question text-xl p-2">ონლაინ</div>
                <div className="answer">
                  <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={handleServiceClick}>სააფთიაქო სერვისი</button>
                  <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ონლაინ გაყიდვები' onClick={handleServiceClick}>ონლაინ გაყიდვები</button>
                  <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ქოლ ცენტრი' onClick={handleServiceClick}>ქოლ ცენტრი</button>
                </div>
              </div>
      }
      {showCallcenter&&
                <div className="form w-full flex flex-col items-center m-2">
                <div className="question text-xl p-2">ქოლ ცენტრი</div>
                <div className="answer">
                  <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={handleServiceClick}>სააფთიაქო სერვისი</button>
                  <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ონლაინ გაყიდვები' onClick={handleServiceClick}>ონლაინ გაყიდვები</button>
                  <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ქოლ ცენტრი' onClick={handleServiceClick}>ქოლ ცენტრი</button>
                </div>
              </div>
      }
      {showMoreInfo &&
        <div className="form w-full flex flex-col items-center m-2">
          <div className="question text-xl p-2">მოგვწერეთ მეტი ინფორმაცია</div>
          <div className="answer flex flex-col w-full md:w-1/3">
            <textarea className="w-full h-60 rounded-xl drop-shadow-xl p-2 bg-readableBg "></textarea>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2">გაგზავნა</button>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
