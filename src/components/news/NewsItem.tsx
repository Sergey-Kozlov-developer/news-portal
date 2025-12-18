import noImage from "../../assets/img/no-img.png";

interface INewsItem {
	urlToImage: string | null;
	author: string | null;
	url: string;
	title: string;
	description: string | null;
	publishedAt: string;
}

function NewsItem({
	urlToImage,
	author,
	url,
	title,
	description,
	publishedAt,
}: INewsItem) {
	const handleImageError = (
		e: React.SyntheticEvent<HTMLImageElement, Event>
	) => {
		const target = e.target as HTMLImageElement;
		target.onerror = null;
		target.src = noImage;
	};

	return (
		<article className="news__item">
			<div className="news__image-wrapper">
				<img
					className="news__image"
					src={urlToImage || noImage}
					alt={title || "Новость"}
					onError={handleImageError}
				/>
			</div>

			<div className="news__content">
				{author && <div className="news__author">{author}</div>}
				<h2 className="news__title">
					<a
						href={url}
						className="news__link"
						target="_blank"
						rel="noopener noreferrer"
					>
						{title}
					</a>
				</h2>
				<div className="news__description">{description}</div>

				<div className="news__info">
					<time className="news__date">
						{new Date(publishedAt).toLocaleDateString()}
					</time>
				</div>
			</div>
		</article>
	);
}

export default NewsItem;
