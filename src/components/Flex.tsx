import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  width: ${({width}) => width};
  height: ${({height}) => height};
  flex-direction: ${({direction}) => direction ? direction : 'row'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'space-between'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  margin: ${({margin}) => margin ? margin : '0'};
`

interface StyledFlexProps {
    width: string;
    height: string;
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
    margin?: string;
}

const Flex: React.FC<StyledFlexProps> = (props) => {
    return (
        <StyledFlex {...props}>
            {props.children}
        </StyledFlex>
    );
};

export default Flex;