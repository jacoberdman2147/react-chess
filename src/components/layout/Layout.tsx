import styled from 'styled-components';
import {StyledComponentProps} from 'types/commonTypes';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps extends StyledComponentProps {
  /** The children to render within the layout */
  children: React.ReactNode,
}

/** The main layout component which displays its children between a header and footer */
const Layout = styled(({children, className}: LayoutProps) => (
  <div id='main-layout' className={className}>
    <Header/>
    <div id='layout-content' className='layout-content'>
      {children}
    </div>
    <Footer/>
  </div>
))`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .layout-content {
    flex-grow: 1;
    padding: 1.5rem;
  }
`;

export default Layout;