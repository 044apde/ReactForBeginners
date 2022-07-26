import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movieDetail, setMovieDetail] = useState([]);
	const getMovies = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
		);
		const json = await response.json();
		console.log(json.data.movie);
		setMovieDetail(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			<img src={movieDetail.medium_cover_image} />
			<h1>{movieDetail.title}</h1>
			<ul>{movieDetail.description_full}</ul>
		</div>
	);
}

export default Detail;
