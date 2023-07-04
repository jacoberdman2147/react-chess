import styled from 'styled-components';
import {StyledComponentProps} from 'types';
import ChessboardSquare from './ChessboardSquare';

/** Component used for displaying the chessboard */
const Chessboard = styled(({className}: StyledComponentProps) => (
  <div className={className}>
    {new Array(8).fill(0).map((_, row) => (
      <div key={row}>
        {new Array(8).fill(0).map((_, col) => (
          <ChessboardSquare key={col} color={(row + col) % 2 === 0 ? 'white' : 'black'}/>
        ))}
      </div>
    ))}
  </div>
))`
  display: flex;
  flex-direction: column;
  
  div {
    display: flex;
  }
`;

export default Chessboard;