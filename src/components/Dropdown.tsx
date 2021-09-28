import React from 'react';
import styled from 'styled-components';
import {IStarship} from "../types/starship";
import List from "./List";
import DropdownItem from "./DropdownItem";

const StyledDropdown = styled.div<StyledDropdownProps>`
  width: 8rem;
  min-width: 320px;
  max-width: 400px;
  height: 5rem;
  background: #2E2E2E;
  border: 2px solid #AEAD70;
  border-radius: 8px;
  font-size: 1.25rem;
  color: #DCDCDC;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  
  &:hover {
    background-color: #3d3d3d;
  }
`

interface StyledDropdownProps {
    items: IStarship[];
    selected: IStarship[];
    opened?: boolean;
    onClick?: () => void;
    onSelect?: (starship: IStarship) => void;
}

const Dropdown: React.FC<StyledDropdownProps> = ({items, selected, opened, onClick, onSelect}) => {
    return (
        <>
            <StyledDropdown onClick={onClick} opened={opened} items={items} selected={selected}>
                {selected.length !== 0 ? `${selected.length} selected` : 'Select starship'}
            </StyledDropdown>
            {opened && <List items={items} renderItems={(item, index) => <DropdownItem isSelected={selected.includes(item)} onSelect={onSelect} key={index}
                                                                                       item={item}/>}/>}
        </>
    );
};

export default Dropdown;