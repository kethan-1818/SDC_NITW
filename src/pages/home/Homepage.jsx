import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";
import "./homepage.css";
import ParticlesComponent from "../../component/particle";
function Home() {
	return (
		<> 
    <ParticlesComponent id="particles" ></ParticlesComponent>
		<div className="mid">
		<About className="about"/>
		<ContactUs className="contect"/>
		</div>
			
		</>
	);
}

export default Home;






