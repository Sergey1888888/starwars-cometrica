import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div<StyledTitleProps>`
  color: ${({color}) => color ? color : '#DCDCDC'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '16px'};
  margin-top: ${({marginTop}) => marginTop ? marginTop : '0'};
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '0'};
  text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
`

interface StyledTitleProps {
    color?: string;
    fontSize?: string;
    marginTop?: string;
    marginBottom?: string;
    textAlign?: string;
}

const Text: React.FC<StyledTitleProps> = ({color, fontSize, marginTop, marginBottom, textAlign, children}) => {
    return (
        <StyledText color={color} fontSize={fontSize} marginTop={marginTop} marginBottom={marginBottom} textAlign={textAlign}>
            {children}
        </StyledText>
    );
};

export default Text;