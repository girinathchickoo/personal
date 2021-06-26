import react,{useState,useEffect} from "react";
import Home from "./home/home";
import Consultation  from "./consultation/consultation";
import SearchHistory  from "./searchhistory/searchHistory";
import Navigation  from "./navigation/navigation";
import About  from "./about/about";
import "./App.css";


function App() {
 

	const [route,setRoute]=useState("home")
  var screen;
 const [view,setview]=useState(screen);

           
             window.addEventListener("load",function(){
              if(window.innerWidth <=800 ){
            

                setview(true)
              }else{
                setview(false)
          
              }
             })
             window.addEventListener("resize",function(){
              
              if(window.innerWidth <=800 ){
            

                setview(true)
              }else{
                setview(false)
          
              }
             })
       
 if(window.screen.width <=800){
  screen=true
 }else{
  screen=false
 }

	function routeFunction(value){
		setRoute(value)
}

function mobileNav(){
document.querySelector(".fas").classList.toggle("fa-times")
document.querySelector(".mobnav").classList.toggle("onclicknav")



  
}
  return (
  	<div>
    <div className="mobnav">
    <Navigation  routeFunction={routeFunction} />
    </div>
  	{route === "home"?
    <Home >
   {
    view ? 
  <i className="fas fa-bars" onClick={mobileNav}></i>
  :
  <Navigation routeFunction={routeFunction} />
}
 </Home >
   
   

   :
  
   route === "consultation"?
   <Consultation >
   { view ?
    <i className="fas fa-bars" onClick={mobileNav}></i>
    :
   <Navigation routeFunction={routeFunction}/>}
   </Consultation>
   :
   route ==="search" ?
   <SearchHistory>
   {view ?
    <i className="fas fa-bars" onClick={mobileNav}></i>
    :
   <Navigation routeFunction={routeFunction}/>}
   </SearchHistory>
   :
   <About>
   {view ?
    <i className="fas fa-bars" onClick={mobileNav}></i>
    :
   <Navigation routeFunction={routeFunction} onClick={mobileNav}/>}
   </About>
        }</div>
  )
}

export default App;
