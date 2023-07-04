import styled from 'styled-components';
import {StyledComponentProps} from 'types/commonTypes';

/** Footer component for the main site layout */
const Footer = styled(({className}: StyledComponentProps) => (
  <div id='footer' className={className}>
    <p>React-chess footer</p>
  </div>
))`
  width: 100%;
  flex-grow: 0;
  display: flex;
  background-color: #333333;
  position: sticky;
  bottom: 0;
`;

export default Footer;