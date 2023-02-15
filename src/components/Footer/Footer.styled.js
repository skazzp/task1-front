import styled from 'styled-components';
import Cartoon3 from '../../assets/images/cartoon3.svg';
import Cartoon4 from '../../assets/images/cartoon4.svg';
import Cartoon5 from '../../assets/images/cartoon5.svg';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  padding-left: 24%;
  padding-top: 79px;
  border: 1px solid #d8d8d8;
  background-color: #fafafa;
  background-image: url(${Cartoon3}), url(${Cartoon4}), url(${Cartoon5});
  background-repeat: no-repeat;
  background-position: left 4% bottom, right 128px top, right bottom 28px;
`;

export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 26px;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;
