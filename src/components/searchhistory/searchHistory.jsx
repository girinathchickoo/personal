import react from "react";
import "./search.css";



function searchHistory(props){
	return(
		<section id="search">
		<div>
			<div className="navi">
			<h1>Dr. Naren Siva</h1>
			{props.children}</div>
				<div className="container">
			<p>Patient's History</p>
			<h1>Fill In Any One Of The Fields</h1>
			<div className="container2">

			
			<form>
			<div className="padding">
				<input type="text" placeholder="Patient name" />
				<input type="number" placeholder="mob" />
			</div>
			<div className="fields">
			<input type="date" placeholder="date" />
			<button>Fetch patient</button>
			</div>
			</form>
			</div> 
            </div>
			</div>
			</section>
			
		)
}

export default searchHistory;