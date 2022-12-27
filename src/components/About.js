const About = (props)=>{
    const handleAboutClick = props.handleAboutClick
    return (
        <div className="form w-full flex flex-col items-center m-2">
        <div className="question text-xl p-2">რას უკავშირდება თქვენი შეფასება</div>
            <div className="answer">
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='პროდუქცია' onClick={handleAboutClick}>პროდუქცია</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='მომსახურება' onClick={handleAboutClick}>მომსახურებას</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='ვებ-გვერდი' onClick={handleAboutClick}>ვებ-გვერდს</button>
            <button className="p-2 bg-green rounded-xl drop-shadow-xl text-white m-2" value='სხვა' onClick={handleAboutClick}>სხვა</button>
            </div>
        </div>
    )
}
export default About