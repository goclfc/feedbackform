const CallCenter = ()=>{
    return (
        <div className="form w-full flex flex-col items-center m-2 ">
        <div className="question text-xl p-2">ქოლ ცენტრი</div>
        <div className="answer">
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' >სააფთიაქო სერვისი</button>
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ონლაინ გაყიდვები' >ონლაინ გაყიდვები</button>
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ქოლ ცენტრი' >ქოლ ცენტრი</button>
        </div>
      </div>
    )
}
export default CallCenter