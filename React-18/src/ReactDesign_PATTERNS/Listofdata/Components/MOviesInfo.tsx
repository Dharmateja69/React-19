interface MoviesInfo {
  movies: {
    movieTitle: string;
    moviePrice: number;
    movieDescription: string;
    movieRating: number;
  };
}
const MOviesInfo = ({ movies }: MoviesInfo) => {
  const { movieTitle, moviePrice, movieDescription, movieRating } = movies;
  return (
    <div>
      <h1>Movie Title:{movieTitle}</h1>
      <p>MoviePrice:{moviePrice}</p>
      <p>MovieDescription:{movieDescription}</p>
      <p>MovieRating:{movieRating}</p>
      <br></br>
    </div>
  );
};

export default MOviesInfo;
