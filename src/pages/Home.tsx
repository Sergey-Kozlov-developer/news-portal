// import { useEffect, useState } from "react";
import Header from "../components/header/Header";
// import axios from "axios";
import NewsList from "../components/news/NewsList";

const Home = () => {
	return (
		<div className="container">
			<Header />
			<NewsList />
		</div>
	);
};

export default Home;
