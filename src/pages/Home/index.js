import React, { Component } from 'react';
import { FaTemperatureLow } from 'react-icons/fa';
import Loader from 'react-loader-spinner';

import api from '../../services/api';

import {
  Container,
  SolList,
  Title,
  Date,
  Info,
  InfoTitle,
  Temperature,
  InfoButton,
  Loading,
} from './styles';

export default class Home extends Component {
  state = {
    temperatures: [],
    keys: [],
    averageTemperatures: 0,
    dates: [],
    loading: false,
    ready: false,
  };

  componentDidMount() {
    this.setState({ loading: true, ready: false });
    this.loadSol();

    setTimeout(() => {
      this.setState({ loading: false });

      setTimeout(() => {
        this.setState({ ready: true });
      }, 0);
    }, 700);
  }

  async loadSol() {
    const response = await api.get('/');
    this.setState({
      temperatures: response.data.temperatures,
      keys: response.data.keys,
      averageTemperatures: response.data.averageTemperatures,
      dates: response.data.dates,
    });
  }

  render() {
    const {
      temperatures,
      keys,
      averageTemperatures,
      dates,
      loading,
      ready,
    } = this.state;
    return (
      <>
        {loading ? (
          <Loading>
            <Loader type="Bars" color="#fff" height={100} width={100} />
          </Loading>
        ) : (
          <>
            <Container ready={ready}>
              <h1>Latest Weather at Elysium Planitia</h1>
              <p>Average temperatures</p>
              <span>{averageTemperatures} °F</span>
            </Container>
            <InfoButton to={`/sol/${keys[keys.length - 1]}`} ready={ready}>
              Sol info
            </InfoButton>
            <SolList ready={ready}>
              {temperatures.map((temperature, index) => (
                <li key={keys[index]}>
                  <Title>{keys[index]}</Title>
                  <Date>{dates[index]}</Date>
                  <Info>
                    <InfoTitle>
                      <div>
                        <FaTemperatureLow />
                        <p>Temperature</p>
                      </div>
                      <Temperature className="temp">
                        {temperature} °F
                      </Temperature>
                    </InfoTitle>
                  </Info>
                </li>
              ))}
            </SolList>
          </>
        )}
      </>
    );
  }
}
