import React, { useState, useEffect } from 'react'
import CharacterTable from './CharacterTable';
import CharacterCreate from './CharacterCreate';
import CharacterEdit from './CharacterEdit';
<<<<<<< HEAD
import { Button } from 'reactstrap';
=======
import {Button} from 'reactstrap'
import CharacterView from './CharacterView';
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c

const CharacterIndex = (props) => {

    const [characterToUpdate, setCharacterToUpdate] = useState({})
    const [updateActive, setUpdateActive] = useState(false)
<<<<<<< HEAD
=======
    const [results, setResults] = useState([])

    
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c

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

<<<<<<< HEAD
    return (
        <div>
            <CharacterTable  token={props.token}/>
            {
                (localStorage.getItem('token')) ?
                <CharacterCreate token={props.token} /> :
=======
    const fetchCharacters = () => {
        fetch(`http://localhost:3025/character`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then(res => res.json())
        .then(data => setResults(data))
        .then(console.log(results))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    return (
        <div>
            <CharacterTable token={props.token} fetchCharacters={fetchCharacters} results={results}/>
            {
                (localStorage.getItem('token')) ?
                <CharacterCreate token={props.token} fetchCharacters={fetchCharacters}/> :
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c
                null
            }
            {
                updateActive ?
                <CharacterEdit characterToUpdate={characterToUpdate} updateOff={updateOff} token={props.token}/> :
                null
            }
<<<<<<< HEAD
            <Button onClick={updateOn} >Show Charater Edit</Button>
=======
            {/* {
                viewCharacter ?
                <CharacterView toggleViewCharacter={toggleViewCharacter}/> :
                null
            } */}
            <Button onClick={updateOn} >Show Character Edit</Button>
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c
        </div>
    )
}

export default CharacterIndex;