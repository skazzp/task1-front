import styled from 'styled-components';
import Map from '../../assets/images/map.png';
import Clouds from '../../assets/images/cloud.png';
import Cartoon1 from '../../assets/images/cartoon1.svg';
import Cartoon2 from '../../assets/images/cartoon2.svg';

export const Container = styled.div`
  width: 100%;
  padding-top: 180px;
  padding-left: 10%;
  padding-bottom: 174px;
  background-image: url(${Cartoon1}), url(${Cartoon2}), url(${Map}), url(${Clouds});
  background-repeat: no-repeat;
  background-position: left 3% top 30px, right 380px bottom 105px, right top, left top;
`;

export const FormContainer = styled.div`
  width: 39%;
  min-width: 300px;
  max-width: 557px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  font-family: 'Apercu Arabic Pro';
  font-size: 40px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0em;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 30px 46px;
  color: #2d2d2d;
  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0em;
  text-align: left;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;

  &::placeholder {
    color: #2d2d2d;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 30px 46px;
  color: #2d2d2d;
  resize: none;
  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0em;
  text-align: left;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 23px;

  &::placeholder {
    color: #2d2d2d;
  }
`;

export const Button = styled.button`
  width: fit-content;
  color: #ffffff;
  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding: 27px 52px;
  background-color: #fad34f;
  border-radius: 500px;
  border: none;
`;
