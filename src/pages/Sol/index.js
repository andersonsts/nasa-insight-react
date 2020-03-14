import React, { Component } from 'react';
import {
  FaArrowLeft,
  FaTemperatureLow,
  FaCompress,
  FaWind,
} from 'react-icons/fa';

import api from '../../services/api';

import { Container, BackButton, Info } from './styles';

export default class Sol extends Component {
  state = {
    sol: {},
  };

  componentDidMount() {
    this.loadSol();
  }

  async loadSol() {
    const response = await api.get(); // Realiza a requisição do ultimo sol

    this.setState({ sol: response.data });
  }

  render() {
    const { sol } = this.state;

    return (
      <>
        <BackButton to="/">
          <FaArrowLeft />
        </BackButton>
        <Container>
          <img
            src="https://clebinho.pro.br/wp/wp-content/uploads/2018/05/580b585b2edbce24c47b2708.png"
            alt="Marte"
          />
          <strong>Sol 292</strong>
          <span>Aug. 19</span>

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
                <strong> -17,5 </strong>
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
                <strong> 13,5 </strong>
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
                <strong> 633,5 </strong>
              </td>
              <td>
                <span> Pa </span>
              </td>
            </tr>
          </Info>
        </Container>
      </>
    );
  }
}
