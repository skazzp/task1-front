import icons from '../../assets/images/icons.svg';
import { Container, Icon, List } from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <List>
        <li>
          <Icon>
            <use href={icons + `#icon-linkedin`}></use>
          </Icon>
        </li>
        <li>
          <Icon>
            <use href={icons + `#icon-twitter`}></use>
          </Icon>
        </li>
        <li>
          <Icon>
            <use href={icons + `#icon-facebook`}></use>
          </Icon>
        </li>
        <li>
          <Icon>
            <use href={icons + `#icon-pinterest`}></use>
          </Icon>
        </li>
      </List>
    </Container>
  );
};

export default Footer;
