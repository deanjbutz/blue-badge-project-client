import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
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
        setViewCharacter(false)
        // (viewEditCharacter) ?
        // setViewEditCharacter(false) :
        setViewEditCharacter(true)
    }

    return (

        <Table>
            <thead>CharacterTable</thead>
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
                                    <th>{results.name}</th>
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
            {
                viewCharacter ?
                <CharacterView toggleViewCharacter={toggleViewCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters} toggleViewEditCharacter={toggleViewEditCharacter}/> :
                null
            }
            {
                viewEditCharacter ?
                <CharacterEdit toggleViewEditCharacter={toggleViewEditCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters} fetchCharacter={fetchCharacter} toggleViewCharacter={toggleViewCharacter}/> :
                null
            }
        </Table>

    )
}

export default CharacterTable;