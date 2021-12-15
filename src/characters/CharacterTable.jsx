// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Button } from 'reactstrap';
import './characterTable.css'

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
                    <CharacterView toggleViewCharacter={toggleViewCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters} toggleViewEditCharacter={toggleViewEditCharacter} /> :
                    null
            }
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ border: 1 }}>Name</TableCell>
                            <TableCell sx={{ border: 1 }}>Race</TableCell>
                            <TableCell sx={{ border: 1 }}>Class</TableCell>
                            <TableCell sx={{ border: 1 }}>View Character</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (props.results) ?
                                props.results.map((results, id) => {
                                    return (
                                        <TableRow key={id}>
                                            <TableCell sx={{ border: 1 }}>{results.name}</TableCell>
                                            <TableCell sx={{ border: 1 }}>{results.race}</TableCell>
                                            <TableCell sx={{ border: 1 }}>{results.chrClass}</TableCell>
                                            <TableCell sx={{ border: 1 }}>
                                                <Button id={results.id} onClick={e => fetchCharacter(e)}>View Character</Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                }) : null
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CharacterTable;