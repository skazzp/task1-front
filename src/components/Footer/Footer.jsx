import icons from '../../assets/images/icons.svg';
import { Container, Icon, Link, List } from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <List>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Icon>
              <use href={icons + `#icon-linkedin`}></use>
            </Icon>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Icon>
              <use href={icons + `#icon-twitter`}></use>
            </Icon>
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Icon>
              <use href={icons + `#icon-facebook`}></use>
            </Icon>
          </a>
        </li>
        <li>
          <Link href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <Icon>
              <use href={icons + `#icon-pinterest`}></use>
            </Icon>
          </Link>
        </li>
      </List>
    </Container>
  );
};

export default Footer;
