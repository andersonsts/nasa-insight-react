import React, { Component } from 'react';
import { FaTemperatureLow } from 'react-icons/fa';

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
} from './styles';

export default class Home extends Component {
  state = {
    solData: [],
  };

  componentDidMount() {
    this.loadSol();
  }

  async loadSol() {
    const response = await api.get();

    this.setState({ solData: response.data });
  }

  render() {
    const { solData } = this.state;

    return (
      <>
        <Container>
          <h1>Latest Weather at Elysium Planitia</h1>
          <p>Average temperatures</p>
          <span>-17 °F</span>
        </Container>
        <InfoButton to="/sol">Sol info</InfoButton>
        <SolList>
          <li>
            <Title>Sol 259</Title>
            <Date>Aug. 19</Date>
            <Info>
              <InfoTitle>
                <FaTemperatureLow />
                <p>Temperature</p>
              </InfoTitle>
              <Temperature> -17 °F </Temperature>
            </Info>
          </li>
          <li>
            <Title>Sol 259</Title>
            <Date>Aug. 19</Date>
            <Info>
              <InfoTitle>
                <FaTemperatureLow />
                <p>Temperature</p>
              </InfoTitle>
              <Temperature> -17 °F </Temperature>
            </Info>
          </li>
          <li>
            <Title>Sol 259</Title>
            <Date>Aug. 19</Date>
            <Info>
              <InfoTitle>
                <FaTemperatureLow />
                <p>Temperature</p>
              </InfoTitle>
              <Temperature> -17 °F </Temperature>
            </Info>
          </li>
          <li>
            <Title>Sol 259</Title>
            <Date>Aug. 19</Date>
            <Info>
              <InfoTitle>
                <FaTemperatureLow />
                <p>Temperature</p>
              </InfoTitle>
              <Temperature> -17 °F </Temperature>
            </Info>
          </li>
          <li>
            <Title>Sol 259</Title>
            <Date>Aug. 19</Date>
            <Info>
              <InfoTitle>
                <FaTemperatureLow />
                <p>Temperature</p>
              </InfoTitle>
              <Temperature> -17 °F </Temperature>
            </Info>
          </li>
          <li>
            <Title>Sol 259</Title>
            <Date>Aug. 19</Date>
            <Info>
              <InfoTitle>
                <FaTemperatureLow />
                <p>Temperature</p>
              </InfoTitle>
              <Temperature> -17 °F </Temperature>
            </Info>
          </li>
          <li>
            <Title>Sol 259</Title>
            <Date>Aug. 19</Date>
            <Info>
              <InfoTitle>
                <FaTemperatureLow />
                <p>Temperature</p>
              </InfoTitle>
              <Temperature> -17 °F </Temperature>
            </Info>
          </li>
        </SolList>
      </>
    );
  }
}
