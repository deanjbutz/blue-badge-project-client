import React, {useEffect, useState} from 'react';
import { Table } from 'reactstrap';
import CharacterView from './CharacterView'

const CharacterTable = (props) => {

    const [results, setResults] = useState('')
    const [character, setCharacter] = useState({})

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
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>CharacterTable</h1>
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
                        (results) ?
                        results.map((results, id) => {
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
            <CharacterView character={character} token={props.token}/>
        </div>
    )
}

export default CharacterTable;