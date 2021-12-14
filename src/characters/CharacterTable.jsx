import React, {useEffect, useState} from 'react';
import { Table } from 'reactstrap';
import CharacterView from './CharacterView'

const CharacterTable = (props) => {

    // const [results, setResults] = useState([])
    const [character, setCharacter] = useState({})
    const [viewCharacter, setViewCharacter] = useState(false)

    // const fetchCharacters = () => {
    //     fetch(`http://localhost:3025/character`, {
    //         method: "GET",
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(data => setResults(data))
    //     .then(console.log(results))
    //     .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     fetchCharacters()
    // }, [viewCharacter])

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
        (viewCharacter) ?
        setViewCharacter(false) :
        setViewCharacter(true)
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
<<<<<<< HEAD
            <CharacterView character={character} token={props.token}/>
=======
            {
                viewCharacter ?
                <CharacterView toggleViewCharacter={toggleViewCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters}/> :
                null
            }
>>>>>>> c79df8834b71578ceaa4e4a195c6b9cea9bfe17c
        </div>
    )
}

export default CharacterTable;