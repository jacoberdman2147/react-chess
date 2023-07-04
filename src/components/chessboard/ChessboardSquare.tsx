import styled from 'styled-components';
import {StyledComponentProps} from 'types';

interface ChessboardSquareProps extends StyledComponentProps {
  /** Color of the chess square */
  color: 'black' | 'white',
}

/** Component for displaying a single square within a chessboard */
const ChessboardSquare = styled(({className}: ChessboardSquareProps) => {
  return <div className={className}/>;
})<ChessboardSquareProps>`
  background-color: ${({color}) => color};
  width: 2rem;
  height: 2rem;
`;

export default ChessboardSquare;