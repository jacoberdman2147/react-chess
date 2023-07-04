import styled from 'styled-components';
import {StyledComponentProps} from 'types/commonTypes';

/** Header component for the main site layout */
const Header = styled(({className}: StyledComponentProps) => (
  <div id='header' className={className}>
    <p>React-chess header</p>
  </div>
))`
  width: 100%;
  flex-grow: 0;
  display: flex;
  background-color: #333333;
  position: sticky;
  top: 0;
`;

export default Header;