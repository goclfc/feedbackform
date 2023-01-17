const AgeForm = (props) =>{
    const handleAgeClick=props.handleAgeClick
    const handleSkipClick = props.handleSkipClick
    const handleBackClick =props.back
    return (
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
          <button className="bg-light-red p-2 m-2 rounded-xl" onClick={handleBackClick}>უკან დაბრუნება</button>

        </div>
    )
}
export default AgeForm