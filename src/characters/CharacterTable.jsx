// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
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

    // const theme = createTheme()

    //     theme.typography= {
    //       fontFamily: [
    //         'Quintessential', 
    //         'cursive'
    //       ].join(','),
    //     }

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Quintessential',
                'cursive'
            ].join(','),
        },
    });

    return (
        <div>
            <Table id="table">
                <h1>Character Table</h1>
                {
                    localStorage.getItem('token') ?
                        <button className="btn" onClick={props.createOn}>Create Character</button> :
                        null
                }
                {
                    viewCharacter ?
                        <CharacterView toggleViewCharacter={toggleViewCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters} toggleViewEditCharacter={toggleViewEditCharacter} /> :
                        null
                }
            </Table>
            <TableContainer id="list">
                <ThemeProvider theme={theme}>
                    <Table id="head">
                        <TableHead sx={{ border: 3 }}>
                            <TableRow>
                                <TableCell sx={{ border: 3 }}>Name</TableCell>
                                <TableCell sx={{ border: 3 }}>Race</TableCell>
                                <TableCell sx={{ border: 3 }}>Class</TableCell>
                                <TableCell sx={{ border: 3 }}>View Character</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ border: 3 }}>
                            {
                                (props.results) ?
                                    props.results.map((results, id) => {
                                        return (
                                            <TableRow key={id}>
                                                <TableCell sx={{ border: 1 }}>{results.name}</TableCell>
                                                <TableCell sx={{ border: 1 }}>{results.race}</TableCell>
                                                <TableCell sx={{ border: 1 }}>{results.chrClass}</TableCell>
                                                <TableCell sx={{ border: 1 }}>
                                                    <Button className="btn2" id={results.id} onClick={e => fetchCharacter(e)}>View Character</Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }) : null
                            }
                        </TableBody>
                    </Table>
                </ThemeProvider>
            </TableContainer>
        </div>
    )
}

export default CharacterTable;