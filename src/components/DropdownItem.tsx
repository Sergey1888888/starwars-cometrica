import React from 'react';
import styled from 'styled-components';
import {IStarship} from "../types/starship";
import Text from "./Text";
import Flex from "./Flex";

const StyledDropdownItem = styled.li<DropdownItemProps>`
  width: 100%;
  height: 100%;
  min-height: 210px;
  padding: 5px 20px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  cursor: pointer;
  background: ${({isSelected}) => isSelected ? '#46462F' : ''};
  
  &:hover {
    background: ${({isSelected}) => isSelected ? '#46462F' : '#3d3d3d'};
  }
`

interface DropdownItemProps {
    item: IStarship;
    isSelected: boolean;
    onSelect?: (starship: IStarship) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({item, isSelected, onSelect}) => {
    return (
        <StyledDropdownItem item={item} isSelected={isSelected} onClick={() => onSelect!(item)}>
            <Text fontSize='14px'>{item.name}</Text>
            <Text fontSize='12px'>{item.model}</Text>
            <Flex width='100%' height='30px'>
                <Text fontSize='12px'>Manufacturer</Text>
                <Text fontSize='12px'>{item.manufacturer}</Text>
            </Flex>
            <Flex width='100%' height='15px' margin='5px 0 0 0'>
                <Flex width='45%' height='100%'>
                    <Text fontSize='12px'>Consumables</Text>
                    <Text fontSize='12px'>{item.consumables.match(/[\d]+ [\w]/)!.join('')}</Text>
                </Flex>
                <Flex width='48%' height='100%'>
                    <Text fontSize='12px'>Length</Text>
                    <Text fontSize='12px'>{item.length}</Text>
                </Flex>
            </Flex>
            <Flex width='100%' height='15px' margin='5px 0 0 0'>
                <Flex width='45%' height='100%'>
                    <Text fontSize='12px'>MGLT</Text>
                    <Text fontSize='12px'>{item.MGLT}</Text>
                </Flex>
                <Flex width='48%' height='100%'>
                    <Text fontSize='12px'>Max speed</Text>
                    <Text fontSize='12px'>{item.max_atmosphering_speed}</Text>
                </Flex>
            </Flex>
            <Flex width='100%' height='15px' margin='5px 0 0 0'>
                <Flex width='45%' height='100%'>
                    <Text fontSize='12px'>Crew</Text>
                    <Text fontSize='12px'>{item.crew}</Text>
                </Flex>
                <Flex width='48%' height='100%'>
                    <Text fontSize='12px'>Passengers</Text>
                    <Text fontSize='12px'>{item.passengers !== 'n/a' ? item.passengers : '?'}</Text>
                </Flex>
            </Flex>
            <Flex width='100%' height='30px' margin='2px 0 0 0'>
                <Flex width='45%' height='100%' direction='column'>
                    <Text fontSize='12px'>Cargo capacity</Text>
                    <Text fontSize='12px'>{item.cargo_capacity}</Text>
                </Flex>
                <Flex width='45%' height='100%' direction='column'>
                    <Text fontSize='12px'>Cost</Text>
                    <Text fontSize='12px'>{item.cost_in_credits}</Text>
                </Flex>
            </Flex>
            <Flex width='100%' height='30px' margin='2px 0 0 0' justifyContent='center'>
                <Flex width='45%' height='100%' direction='column'>
                    <Text fontSize='12px'>Hyperdrive rating</Text>
                    <Text fontSize='12px'>{item.hyperdrive_rating}</Text>
                </Flex>
            </Flex>
        </StyledDropdownItem>
    );
};

export default DropdownItem;