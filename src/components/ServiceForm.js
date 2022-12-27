const ServiceForm =(props)=>{
    const handleServiceClick = props.handleServiceClick
    return(
        <div className="form w-full flex flex-col items-center m-2">
        <div className="question text-xl p-2">უფრო კონკრეტულად?</div>
        <div className="answer">
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სააფთიაქო სერვისი' onClick={handleServiceClick}>სააფთიაქო სერვისი</button>
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ონლაინ გაყიდვები' onClick={handleServiceClick}>ონლაინ გაყიდვები</button>
          <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ქოლ ცენტრი' onClick={handleServiceClick}>ქოლ ცენტრი</button>
        </div>
      </div>
    )

}
export default ServiceForm