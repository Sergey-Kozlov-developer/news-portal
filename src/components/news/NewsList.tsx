import axios from "axios";
import { useEffect, useState } from "react";

import NewsItem from "./NewsItem";

interface INewsArticle {
	urlToImage: string | null;
	author: string | null;
	url: string;
	title: string;
	description: string | null;
	publishedAt: string;
}
// API
interface IApiResponse {
	articles?: INewsArticle[];
}

const NewsList = () => {
	const [data, setData] = useState<INewsArticle[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiUrl = import.meta.env.VITE_APP_REMOTE_SERVER;
				const apiKey = import.meta.env.VITE_API_KEY;
				const response = await axios.get<IApiResponse>(apiUrl, {
					headers: {
						"X-Api-Key": apiKey,
					},
				});

				console.log("ответ API:", response.data);
				if (response.data.articles) {
					setData(response.data.articles);
				} else if (Array.isArray(response.data)) {
					setData(response.data);
				} else {
					setData([]);
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
				{data.map((item) => (
					<NewsItem
						key={item.url}
						urlToImage={item.urlToImage}
						author={item.author}
						url={item.url}
						title={item.title}
						description={item.description}
						publishedAt={item.publishedAt}
					/>
				))}
			</div>
		</section>
	);
};

export default NewsList;
