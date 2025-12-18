import NewsItem from "./NewsItem";
import { useGetNewsQuery } from "../../redux/api/newsApi";

const NewsList = () => {
	const { data } = useGetNewsQuery({
		q: "technology",
		pageSize: 10,
	});

	return (
		<section className="news-section">
			<div className="news">
				{data?.articles?.map((item) => (
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
