import React from "react";
import axios from "axios";

const FilmesAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=44b184c49f87e855e627601d9b0367bc&language=pt-BR&page=1`
});
export default class App extends React.Component {
  state = {
    movies: []
  };
  addFilmes = async () => {
    const resposta = await FilmesAPI.get();
    const api = resposta.data.results.map((item) => {
      return {
        title: item.title,
        overview: item.overview,
        image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      movies: api
    });
  };
  componentDidMount() {
    this.addFilmes();
  }
  render() {
    return (
      <div>
        <h1>Filmes em alta:</h1>
        <ol>
          {this.state.movies.map((item) => (
            <>
              <li>{item.title}</li>
              <p>{item.overview}</p>
              <img src={item.image} alt={`Poster do filme ${item.title}`} />
            </>
          ))}
        </ol>
      </div>
    );
  }
}
