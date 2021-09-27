import React from 'react';
import styled from 'styled-components';
import {IStarship} from "../types/starship";

const StyledList = styled.ul`
  width: 8rem;
  min-width: 320px;
  max-width: 400px;
  max-height: 195px;
  scroll-snap-type: y mandatory;
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #DCDCDC;
  background: #2E2E2E;
  border-radius: 8px;
  overflow-y: scroll;
  z-index: 50;
  
  &::-webkit-scrollbar {
    background-color: rgba(75,75,75,0.6);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(94,94,94,0.6);
    border-radius: 8px;
  }
  
  @media screen and (max-width: 414px) {
    min-height: 210px;
  }
`

interface StyledListProps {
    items: IStarship[],
    renderItems: (item: IStarship, index: number) => React.ReactNode;
}

const List: React.FC<StyledListProps> = ({items, renderItems}) => {
    return (
        <StyledList>
            {items.map(renderItems)}
        </StyledList>
    );
};

export default List;