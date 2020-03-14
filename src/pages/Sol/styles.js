import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  right: 8%;
  top: calc(50%);
  transform: translateY(-50%);
  width: 450px;
  height: 600px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);

    img {
      transform: scale(1.02);
    }
  }

  img {
    width: 100px;
    margin: 60px 0 30px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
    transition: all 0.25s ease-in-out;
  }

  strong {
    font-size: 45px;
    color: #fff;
  }

  > span {
    text-align: center;
    width: 80%;
    font-size: 25px;
    color: #eee;
    margin-top: 5px;
    padding-bottom: 20px;
    border-bottom: 1px solid #777;
  }
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  height: 40px;
  color: #fff;
  border: 2px solid #eee;
  padding: 25px 30px;
  border-radius: 4px;
  position: absolute;
  left: 5%;
  top: 40px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateX(1%);
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 30px;
  width: 80%;

  p:first-child {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > svg {
      margin-left: 5px;
      font-size: 18px;
    }

    > p {
      margin-left: 10px;

      > span {
        font-size: 22px;
        margin-left: 100px;
        color: #eee;
      }
    }
  }

  p:nth-child(2) {
    margin: 10px 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > svg {
      margin-right: 3px;
    }

    > p {
      margin-left: 10px;

      > span {
        font-size: 22px;
        margin-left: 140px;
        color: #eee;
      }
    }
  }

  p:nth-child(3) {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > svg {
      margin-left: 2px;
      font-size: 18px;
    }

    > p {
      margin-left: 12px;

      > span {
        font-size: 22px;
        margin-left: 140px;
        color: #eee;
      }
    }
  }
`;
