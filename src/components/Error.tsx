import React from 'react';
import styled from 'styled-components';
import Text from "./Text";

const StyledError = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  z-index: 100;
`

const Error: React.FC = ({children}) => {
    return (
        <StyledError>
            <Text marginTop='15px' fontSize='3rem'>
                {children}
            </Text>
        </StyledError>
    );
};

export default Error;