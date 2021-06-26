import react from "react";
import "./home.css";




function Home(props){
	function changeRoute(e){
		
		props.routeFunction(e.target.name)
		e.preventDefault()

	}

	return(
		<section id="home" className="flex-item">
		<div className="flex-margin">
		<h1>Dr. Naren Siva</h1>
		<h2>KAMALA SAYEE DENTAL CARE CHENNAI</h2>
		{props.children}
		<i class="fab fa-twitter"></i>
		<i className="fab fa-facebook-f pad"></i>
		<i class="fab fa-instagram"></i>
		<i class="fab fa-skype"></i>
		<i class="fab fa-linkedin-in"></i>
      </div>

		</section>)
}



export default Home;