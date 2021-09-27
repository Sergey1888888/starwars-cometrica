import React from 'react';
import styled from 'styled-components';
import StarshipIcon from "./StarshipIcon";
import Text from "./Text";

const StyledPreloader = styled.div`
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

const Preloader: React.FC = () => {
    return (
        <StyledPreloader>
            <StarshipIcon background='transparent'/>
            <Text marginTop='15px'>
                Loading...
            </Text>
        </StyledPreloader>
    );
};

export default Preloader;