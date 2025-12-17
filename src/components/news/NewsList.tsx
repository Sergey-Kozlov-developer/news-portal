import axios from "axios";
import { useEffect, useState } from "react";

import noImage from "../../assets/img/no-img.png";

const NewsList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiUrl = import.meta.env.VITE_APP_REMOTE_SERVER;
				const apiKey = import.meta.env.VITE_API_KEY;
				const response = await axios.get(apiUrl, {
					headers: {
						"X-Api-Key": apiKey,
					},
				});

				console.log("ответ API:", response.data);
				if (response.data.articles) {
					setData(response.data.articles);
				} else {
					setData(response.data);
				}
			} catch (err) {
				console.error("Ошибка при запросе:", err);
			}
		};
		fetchData();
	}, []);
	return (
		<section className="news-section">
			<div className="news">
				{data.map((item, index) => (
					<article key={index} className="news__item">
						<div className="news__image-wrapper">
							<img
								className="news__image"
								src={item.urlToImage || noImage} // Заглушка для отсутствующего изображения
								alt={item.title || "Новость"}
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = noImage;
								}}
							/>
						</div>

						<div className="news__content">
							{item.author && (
								<div className="news__author">
									{item.author}
								</div>
							)}
							<h2 className="news__title">
								<a
									href={item.url}
									className="news__link"
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.title}
								</a>
							</h2>
							<div className="news__description">
								{item.description}
							</div>

							<div className="news__info">
								<time className="news__date">
									{new Date(
										item.publishedAt
									).toLocaleDateString()}
								</time>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default NewsList;
// <div>
// 	<h1>News</h1>
// 	<ul>
// 		{data.map((item, index) => (
// 			<li key={index}>
// 				<h3>{item.title}</h3>
// 				<h6>{item.description}</h6>
// 				<img src={item.urlToImage} alt="" />
// 				<p>{item.content}</p>
// 				<a href={item.url} target="_blank">
// 					сылка на источник
// 				</a>
// 				<p>{item.author}</p>
// 				<p>{item.publishedAt}</p>
// 			</li>
// 		))}
// 	</ul>
// </div>
