import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Title from "./components/Title";
import Preloader from "./components/Preloader";
import Dropdown from "./components/Dropdown";
import {useActions} from "./hooks/useActions";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Flex from "./components/Flex";
import {IStarship} from "./types/starship";
import Table from "./components/Table";
import {useCompare} from "./hooks/useCompare";
import Error from "./components/Error";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.75rem 3rem;
`

const App = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const {starships, selectedStarships, error, loading} = useTypedSelector((state) => state.starship);
    const {fetchStarships, selectStarship, deselectStarship} = useActions();
    const {cost, length, maxSpeed, crew, passengers, cargoCapacity, consumables, hyperdriveRating, mglt} = useCompare(selectedStarships);

    useEffect(() => {
        fetchStarships();
    }, [])

    const handleOpenDropdown = () => {
        setOpened(!opened);
    }

    const handleSelect = (starship: IStarship) => {
        if (selectedStarships.includes(starship))
            deselectStarship(starship);
        else selectStarship(starship);
    }

    if (loading) return <Preloader/>
    else if (error) return <Error>Loading error...</Error>
    return (
        <AppWrapper>
            <Flex width='100%' height='100%' direction='column'>
                <div>
                    <Title>Star Wars V</Title>
                    <Title fontSize='1.75rem' color='#DCDCDC' marginTop='5px'>Starships comparison</Title>
                </div>
                <Flex direction='column' width='100%' height='100%' margin='116px 0 0 0' justifyContent='space-between'>
                    <Dropdown items={starships} selected={selectedStarships} opened={opened} onClick={handleOpenDropdown} onSelect={handleSelect}/>
                    {selectedStarships.length >= 2 && cost && <><Title marginTop='5rem'>Cost</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={cost}/></>}
                    {selectedStarships.length >= 2 && length && <><Title marginTop='5rem'>Length</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={length}/></>}
                    {selectedStarships.length >= 2 && maxSpeed && <><Title marginTop='5rem'>Max Speed</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={maxSpeed}/></>}
                    {selectedStarships.length >= 2 && crew && <><Title marginTop='5rem'>Crew</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={crew}/></>}
                    {selectedStarships.length >= 2 && passengers && <><Title marginTop='5rem'>Passengers</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={passengers}/></>}
                    {selectedStarships.length >= 2 && cargoCapacity && <><Title marginTop='5rem'>Cargo Capacity</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={cargoCapacity}/></>}
                    {selectedStarships.length >= 2 && consumables && <><Title marginTop='5rem'>Consumables</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={consumables}/></>}
                    {selectedStarships.length >= 2 && hyperdriveRating && <><Title marginTop='5rem'>Hyperdrive Rating</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={hyperdriveRating}/></>}
                    {selectedStarships.length >= 2 && mglt && <><Title marginTop='5rem'>MGLT</Title><Table margin='1rem 0 0 0' columns={selectedStarships.length} items={mglt}/></>}
                </Flex>
            </Flex>
        </AppWrapper>
    );
};

export default App;