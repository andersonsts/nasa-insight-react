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
    margin: 40px 0 30px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
    transition: all 0.25s ease-in-out;
  }

  > strong {
    font-size: 45px;
    color: #fff;
  }

  > span {
    text-align: center;
    width: 80%;
    font-size: 25px;
    color: #eee;
    margin-top: 5px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #777;
  }

  h2 {
    font-size: 25px;
    font-weight: normal;
    color: #eee;
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

export const Info = styled.table`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 20px;
  width: 80%;

  tr {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 5px;

    & + tr {
      margin-top: 40px;
    }

    td:nth-child(2n) {
      text-align: start;
    }

    td:nth-child(2n + 1) {
      text-align: end;
    }

    td:nth-child(2) {
      width: 100%;
      margin-left: 25px;
    }

    td:nth-child(3) {
      width: 100%;
      font-size: 20px;
    }

    td:last-child {
      width: 50%;
      text-align: start;
    }

    td p {
      font-size: 18px;
    }

    td svg {
      width: 18px;
      height: 18px;
    }

    td strong {
      font-size: 25px;
      color: #fff;
      font-weight: lighter;
    }

    td span {
      font-size: 18px;
      margin-left: 10px;
      color: #eee;
      opacity: 0.8;
      font-weight: lighter;
    }
  }
`;
