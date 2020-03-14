import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
  position: absolute;
  top: 32px;
  left: 6%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: absolute;
  top: 32px;
  left: 7%;
  font-family: Arial, Helvetica, sans-serif;
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => (props.ready ? '1' : '0')};

  h1 {
    width: 450px;
    font-size: 50px;
    color: #fff;
    line-height: 1.2;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    width: 800px;
    font-size: 25px;
    margin: 20px 0 5px;
    line-height: 1.5;
    color: #fff;
    text-shadow: 2px 2px 6px #000;
  }

  span {
    font-size: 55px;
    color: #fff;
    text-shadow: 2px 2px 6px #000;
  }
`;

export const SolList = styled.ul`
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 10%;
  left: 2%;
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => (props.ready ? '1' : '0')};

  li {
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 200px;
    border-radius: 4px;
    padding: 25px 20px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.2);

    &:hover {
      box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.1);
      transform: translateY(-2%);

      > div span span {
        transform: scale(1.05);
      }
    }

    & + li {
      margin-left: 10px;
    }
  }
`;

export const Title = styled.strong`
  color: #eee;
  letter-spacing: 1px;
  font-size: 18px;
`;

export const Date = styled.span`
  text-align: center;
  font-weight: lighter;
  letter-spacing: 1px;
  width: 100%;
  color: #eee;
  opacity: 0.7;
  margin-top: 10px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;

export const InfoTitle = styled.span`
  font-size: 15px;
  color: #eee;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 8px;
  }
`;

export const Temperature = styled.span`
  font-size: 25px;
  margin-top: 20px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
`;

export const InfoButton = styled(Link)`
  text-decoration: none;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  height: 40px;
  color: #fff;
  border: 2px solid #eee;
  padding: 25px 0px;
  border-radius: 4px;
  position: absolute;
  right: 10%;
  top: 45px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  opacity: ${props => (props.ready ? '1' : '0')};

  &:hover {
    transform: translateX(1%);
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
