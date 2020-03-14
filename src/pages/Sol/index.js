import React from 'react';
import { FaArrowLeft, FaTemperatureLow, FaCompress } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';

import { Container, BackButton, Info } from './styles';

export default function Sol() {
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

        <Info>
          <p>
            <FaTemperatureLow />
            <p>
              Temperature <span> -17 °F</span>
            </p>
          </p>
          <p>
            <WiHumidity />
            <p>
              Humidity <span> 124 </span>
            </p>
          </p>
          <p>
            <FaCompress />
            <p>
              Pressure <span> 213 </span>
            </p>
          </p>
        </Info>
      </Container>
    </>
  );
}
