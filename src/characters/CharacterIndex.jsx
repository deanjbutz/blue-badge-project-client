import React, { useState, useEffect } from 'react'
import CharacterTable from './CharacterTable';
import CharacterCreate from './CharacterCreate';
// import CharacterEdit from './CharacterEdit';
// import {Button} from 'reactstrap'
// import CharacterView from './CharacterView';

const CharacterIndex = (props) => {

    // const [characterToUpdate, setCharacterToUpdate] = useState({})
    // const [updateActive, setUpdateActive] = useState(false)
    const [results, setResults] = useState([])
    const [createCharacterActive, setCreateCharacterActive] = useState(false)

    // const editCharacter = (character) => {
    //     setCharacterToUpdate(character);
    //     // console.log(character);
    // }

    // const updateOn = () => {
    //     setUpdateActive(true)
    // }

    // const updateOff = () => {
    //     setUpdateActive(false)
    // }

    const fetchCharacters = () => {
        fetch(`http://localhost:3025/character`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then(res => res.json())
        .then(data => setResults(data))
        // .then(console.log(results))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    const createOn = () => {
        setCreateCharacterActive(true)
    }

    const createOff = () => {
        setCreateCharacterActive(false)
    }

    return (
        <div>
            {
                (createCharacterActive === true &&
                localStorage.getItem('token')) ?
                <CharacterCreate token={props.token} fetchCharacters={fetchCharacters} createOff={createOff}/> :
                null
            }
            <CharacterTable token={props.token} fetchCharacters={fetchCharacters} results={results} createOn={createOn}/>
            {/* {
                updateActive ?
                <CharacterEdit characterToUpdate={characterToUpdate} updateOff={updateOff} token={props.token}/> :
                null
            } */}
            {/* {
                viewCharacter ?
                <CharacterView toggleViewCharacter={toggleViewCharacter}/> :
                null
            } */}
            {/* <Button onClick={updateOn} >Show Character Edit</Button> */}
        </div>
    )
}

export default CharacterIndex;