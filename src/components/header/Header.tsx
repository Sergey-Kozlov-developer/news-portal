import logo from "../../assets/img/logo.png";

const Header = () => {
	const menuList = [
		{ id: 1, menu: "News" },
		{ id: 2, menu: "Opinion" },
		{ id: 3, menu: "Science" },
		{ id: 4, menu: "Life" },
		{ id: 5, menu: "Travel" },
		{ id: 6, menu: "Moneys" },
		{ id: 7, menu: "Art & Design" },
		{ id: 8, menu: "Sports" },
		{ id: 9, menu: "People" },
		{ id: 10, menu: "Health" },
		{ id: 11, menu: "Education" },
	];

	return (
		<header className="header">
			<div className="header__inner">
				<div className="header__logo">
					<img className="header__logo-img" src={logo} alt="USA" />
					<span className="header__logo-title">
						Boston and New York Bear Brunt
					</span>
				</div>
				<h1 className="header__title">NEWS</h1>
				<div className="header__info">
					<span>Monday, January 1, 2018</span>
					<span>- 23 °C</span>
				</div>
			</div>
			<nav className="header__menu">
				<ul className="header__menu-list">
					{menuList.map((item) => (
						<li key={item.id} className="header__menu-item">
							<a href="#!">{item.menu}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
