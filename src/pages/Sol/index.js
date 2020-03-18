import React, { Component } from 'react';
import {
  FaArrowLeft,
  FaTemperatureLow,
  FaCompress,
  FaWind,
} from 'react-icons/fa';
import Loader from 'react-loader-spinner';

import api from '../../services/api';

import { Container, BackButton, Info, Loading } from './styles';

export default class Sol extends Component {
  state = {
    sol: {},
    loading: false,
    ready: null,
  };

  componentDidMount() {
    const value = this.props.match.params.sol;
    this.setState({ loading: true, ready: false });
    this.loadSol(value);

    setTimeout(() => {
      this.setState({ loading: false });

      setTimeout(() => {
        this.setState({ ready: true });
      }, 0);
    }, 700);
  }

  async loadSol(value) {
    const response = await api.get('/info', {
      params: {
        sol: value,
      },
    });
    console.log(value);
    this.setState({ sol: response.data });
  }

  render() {
    const { sol, loading, ready } = this.state;

    return (
      <>
        {loading ? (
          <Loading>
            <Loader type="Bars" color="#fff" height={100} width={100} />
          </Loading>
        ) : (
          <>
            <BackButton to="/" ready={ready}>
              <FaArrowLeft />
            </BackButton>
            <Container ready={ready}>
              <img
                src="https://clebinho.pro.br/wp/wp-content/uploads/2018/05/580b585b2edbce24c47b2708.png"
                alt="Marte"
              />
              <strong>Sol {sol.key}</strong>
              <span>{sol.date}</span>

              <h2>Averages</h2>
              <Info>
                <tr>
                  <td>
                    <FaTemperatureLow />
                  </td>
                  <td>
                    <p>Temperature</p>
                  </td>
                  <td>
                    <strong> {sol.temperature} </strong>
                  </td>
                  <td>
                    <span> °F </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaWind />
                  </td>
                  <td>
                    <p>Wind Speed</p>
                  </td>
                  <td>
                    <strong> {sol.wind} </strong>
                  </td>
                  <td>
                    <span> mph </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaCompress />
                  </td>
                  <td>
                    <p>Pressure</p>
                  </td>
                  <td>
                    <strong> {sol.pressure}</strong>
                  </td>
                  <td>
                    <span> Pa </span>
                  </td>
                </tr>
              </Info>
            </Container>
          </>
        )}
      </>
    );
  }
}
