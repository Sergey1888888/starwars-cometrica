import React from 'react';
import styled from 'styled-components';

interface StyledTitleProps {
    color?: string;
    fontSize?: string;
    marginTop?: string;
}

const StyledTitle = styled.header<StyledTitleProps>`
  width: 100%;
  height: fit-content;
  font-size: ${({fontSize}) => fontSize ? fontSize : '2.25rem'};
  text-align: center;
  -webkit-text-stroke: ${({color}) => color ? 'none' : '2px #AEAD70'};
  color: ${({color}) => color ? color : 'transparent'};
  margin-top: ${({marginTop}) => marginTop ? marginTop : '0'};
`

const Title: React.FC<StyledTitleProps> = ({color, fontSize, marginTop, children}) => {
    return (
        <StyledTitle color={color} fontSize={fontSize} marginTop={marginTop}>
            {children}
        </StyledTitle>
    );
};

export default Title;