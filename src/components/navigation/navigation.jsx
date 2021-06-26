import react from "react";


function Navigation(props){

	function changeRoute(e){

		
		props.routeFunction(e.target.name)
		e.preventDefault()
		
		if (document.querySelector(".onclicknav") != null){
		document.querySelector(".onclicknav").classList.remove("onclicknav")
}
	}
	return(
		<nav>

			<a  onClick={(event)=>changeRoute(event)} name="home" className="after" href="#home">Home</a>
			<a onClick={(event)=>changeRoute(event)} className="after" name="consultation" href="#consultation">Consultation Form</a>
			<a onClick={(event)=>changeRoute(event)} className="after" name="search" href="">Patient's History</a>
			<a href="" className="after" onClick={(event)=>changeRoute(event)} name="about">About</a>

		</nav>
		) 
}

export default Navigation;