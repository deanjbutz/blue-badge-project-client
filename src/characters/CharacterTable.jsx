import React, {useEffect, useState} from 'react';
import { Table, Button } from 'reactstrap';
import CharacterView from './CharacterView'
import CharacterEdit from './CharacterEdit';

const CharacterTable = (props) => {

    const [character, setCharacter] = useState({})
    const [viewCharacter, setViewCharacter] = useState(false)
    const [viewEditCharacter, setViewEditCharacter] = useState(false)

    const fetchCharacter = (e) => {
        fetch(`http://localhost:3025/character/${e.target.id}`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then(res => res.json())
        .then(data => setCharacter(data.results))
        .then(console.log(character))
        .then(toggleViewCharacter())
        .catch(err => console.log(err))
    }

    const toggleViewCharacter = () => {
        // setViewEditCharacter(false)
        (viewCharacter) ?
        setViewCharacter(false) :
        setViewCharacter(true)
    }

    const toggleViewEditCharacter = () => {
        viewEditCharacter ?
        setViewEditCharacter(false) :
        setViewEditCharacter(true)
    }

    return (
        <div>
            <h1>CharacterTable</h1> 
            {
                localStorage.getItem('token') ?
                <Button onClick={props.createOn}>Create Character</Button> :
                null
            } 
            {
                viewCharacter ?
                <CharacterView toggleViewCharacter={toggleViewCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters} toggleViewEditCharacter={toggleViewEditCharacter}/> :
                null
            }
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Race</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (props.results) ?
                        props.results.map((results, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{results.name}</th>
                                    <td>{results.race}</td>
                                    <td>{results.chrClass}</td>
                                    <td>
                                        <button id={results.id} onClick={e => fetchCharacter(e)}>View Character</button>
                                    </td>
                                </tr>
                            )
                        }) : null
                    }
                </tbody>
            </Table>
            {
                (viewEditCharacter === true &&
                localStorage.getItem('token')) ?
                <CharacterEdit toggleViewEditCharacter={toggleViewEditCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters} fetchCharacter={fetchCharacter} toggleViewCharacter={toggleViewCharacter}/> :
                null
            }
        </div>
    )
}

export default CharacterTable;