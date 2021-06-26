import react from "react";
import "./consultation.css";


function Consultation(props){

	

	return(
		<section id="consultation">
		<div class="blur">
		<div className="navi">
		  <h1>Dr. Naren Siva</h1>
			{props.children}
			</div>
			
			<div className="container">
			<p>Consultation Form</p>
			<h1>Fill In The Fields</h1>
			<div className="container2">
			
			<form>
			<div className="padding">
				<input type="date" placeholder="date" />
				<input type="number" placeholder="mob" />
			</div>
			<div className="fields">
			<input type="text" placeholder="first name" />
			<input type="text" placeholder="last name" />
			<input type="number" placeholder="age" />
			<input type="text" placeholder="sex" />
			<input type="text" placeholder="blood group" />
			<input type="text" placeholder="chief complaint" />
			<input type="text" placeholder="Medical History" />
			<input type="text" placeholder="clinical findings" />
			<input type="text" placeholder="Investigations" />
			<input type="text" placeholder="diagnosis" />
			<input type="text" placeholder="prescription" />
			<input type="date" placeholder="next review date" />
			<button>Save</button>
			</div>
			</form>
			</div> 
            </div>
</div>
		</section>
		) 
}

export default Consultation;