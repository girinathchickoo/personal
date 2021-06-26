import react from "react";
import me from "./me.jpg"
import "./about.css";

function About(props){

	return(
				<section id="consultation">
		<div>
		<div className="navi">
		  <h1>Dr. Naren Siva</h1>
			{props.children}
			</div>
			
			<div className="container">
			<p>About</p>
			<h1>Learn More About Me</h1>
			<div>
			
			<img src={me} alt="" />
			</div> 
            </div>
</div>
		</section>)

}

export default About;