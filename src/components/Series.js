import React from "react";
import axios from "axios";

const SeriesAPi = axios.create({
  baseURL: `https://api.themoviedb.org/3/tv/popular?api_key=44b184c49f87e855e627601d9b0367bc&language=pt-BR&page=1`
});

export default class Series extends React.Component {
  state = {
    series: []
  };
  addSeries = async () => {
    const response = await SeriesAPi.get();
    const info = response.data.results.map((item) => {
      return {
        nome: item.name,
        sinopse: item.overview,
        image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    console.log(response);
    this.setState({
      series: info
    });
  };
  componentDidMount() {
    this.addSeries();
  }
  render() {
    return (
      <div>
        <h1>Series + assistidas:</h1>
        <ol>
          {this.state.series.map((item) => (
            <>
              <li>{item.nome}</li>
              <p>{item.sinopse}</p>
              <img src={item.image} />
            </>
          ))}
        </ol>
      </div>
    );
  }
}
