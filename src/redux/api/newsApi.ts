import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { IApiResponse } from "../../components/news/NewsList";
export interface INewsArticle {
	source: {
		id: string | null;
		name: string;
	};
	author: string | null;
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
	publishedAt: string;
	content: string | null;
}

export interface INewsResponse {
	status: string;
	totalResults: number;
	articles: INewsArticle[];
}
const apiUrl = import.meta.env.VITE_APP_REMOTE_SERVER;
const apiKey = import.meta.env.VITE_API_KEY;

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: apiUrl,
		headers: {
			"X-Api-Key": apiKey,
		},
	}),
	endpoints: (builder) => ({
		getNews: builder.query<INewsResponse, { q: string; pageSize?: number }>(
			{
				query: ({ q, pageSize = 10 }) => ({
					url: "everything",
					params: {
						q,
						pageSize,
						language: "en",
					},
				}),
			}
		),
	}),
});

export const { useGetNewsQuery } = newsApi;
