import React, { useState, useEffect } from 'react'
import CharacterTable from './CharacterTable';
import CharacterCreate from './CharacterCreate';
import CharacterEdit from './CharacterEdit';
import { Button } from 'reactstrap';

const CharacterIndex = (props) => {

    const [characterToUpdate, setCharacterToUpdate] = useState({})
    const [updateActive, setUpdateActive] = useState(false)

    const editCharacter = (character) => {
        setCharacterToUpdate(character);
        console.log(character);
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }

    return (
        <div>
            <CharacterTable  token={props.token}/>
            {
                (localStorage.getItem('token')) ?
                <CharacterCreate token={props.token} /> :
                null
            }
            {
                updateActive ?
                <CharacterEdit characterToUpdate={characterToUpdate} updateOff={updateOff} token={props.token}/> :
                null
            }
            <Button onClick={updateOn} >Show Charater Edit</Button>
        </div>
    )
}

export default CharacterIndex;