import React from "react";
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Card from './Card/Card';
import Footer from './Footer/Footer';

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="cards-container">
				<Card title="Card Title 1" text="Some quick example text to build on the card title." imageUrl="https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI" />
        		<Card title="Card Title 2" text="Some more example text to build on the card title." imageUrl="https://fastly.picsum.photos/id/41/1280/805.jpg?hmac=W9CWeYdlZisqEfhjuODl83T3lCXAqjUZrOe9iMFPYmI"/>
        		<Card title="Card Title 3" text="Further example text to build on the card title." imageUrl="https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI"/>
				<Card title="Card Title 4" text="Further example text to build on the card title." imageUrl="https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ"/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
