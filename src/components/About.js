const About = (props)=>{
    const handleAboutClick = props.handleAboutClick
    const setShowMoreInfo = props.setShowMoreInfo
    const setShowAbout = props.setShowAbout
    const setFormAbout = props.setFormAbout
    const handleClick = (e)=>{
        console.log(e.target.value)
        setShowAbout(false)
        setShowMoreInfo(true)
        setFormAbout(e.target.value)
    }
    const handleBackClick=props.back
    return (
        <div className="form w-full flex flex-col items-center m-2">
        <div className="question text-xl p-2">რას უკავშირდება თქვენი შეფასება</div>
            <div className="answer">
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='პროდუქცია' onClick={handleAboutClick}>პროდუქცია</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='მომსახურება' onClick={handleAboutClick}>მომსახურებას</button>
            {/* <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ვებ-გვერდი' onClick={handleClick}>ვებ-გვერდს</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სხვა' onClick={handleClick}>სხვა</button> */}
            </div>
            <button className="bg-light-red p-2 m-2 rounded-xl" onClick={handleBackClick}>უკან დაბრუნება</button>
        </div>
    )
}
export default About