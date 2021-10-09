import React from 'react';
import styled from 'styled-components';
import {ICompared} from "../types/starship";
import {isSameValue} from "../helpers/sameValue";

const StyledTable = styled.div<StyledTableProps>`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(${({columns}) => columns}, minmax(100px, 200px));
  grid-template-rows: repeat(2, 3rem);
  margin: ${({margin}) => margin ? margin : '0'};

  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(2, minmax(100px, 200px));
    grid-template-rows: repeat(${({columns}) => columns}, 3rem);
    grid-auto-flow: column;
  }
`

const StyledCell = styled.div<StyledCellProps>`
  display: grid;
  place-items: center;
  text-align: center;
  color: #DCDCDC;
  background: ${({background}) => background};
`


interface StyledCellProps {
    background: string;
}

interface StyledTableProps {
    items: ICompared[];
    columns: number;
    margin?: string;
}

const Table: React.FC<StyledTableProps> = (props) => {
    return (
        <StyledTable {...props}>
            {props.items.map((item, index) => <StyledCell background='#535353' key={index}>{item.name}</StyledCell>)}
            {props.items.map((item, index) => <StyledCell background={isSameValue(props.items, index) ? '#5F560F' : index === 0 ? '#2A3224' : '#442B2B'} key={index}>{item.result}</StyledCell>)}
        </StyledTable>
    );
};

export default Table;