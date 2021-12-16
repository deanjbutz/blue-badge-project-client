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
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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

    // const viewBtn = createTheme({
    //     typography: {
    //         fontFamily: [
    //             ''
    //         ].join(','),
    //     },
    // });

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
                                    <TableCell sx={{ border: 3, bgcolor: '#28100cb0', borderColor: '#28100C', fontSize: '30px', fontWeight: 'bold', color: '#E3DAC9' }}>Name</TableCell>
                                    <TableCell sx={{ border: 3, bgcolor: '#28100cb0', borderColor: '#28100C', fontSize: '30px', fontWeight: 'bold', color: '#E3DAC9' }}>Race</TableCell>
                                    <TableCell sx={{ border: 3, bgcolor: '#28100cb0', borderColor: '#28100C', fontSize: '30px', fontWeight: 'bold', color: '#E3DAC9' }}>Class</TableCell>
                                    <TableCell sx={{ border: 3, bgcolor: '#28100cb0', borderColor: '#28100C', fontSize: '30px', fontWeight: 'bold', color: '#E3DAC9' }}>View Character</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ border: 3 }}>
                                {
                                    (props.results) ?
                                        props.results.map((results, id) => {
                                            return (
                                                <TableRow key={id}>
                                                    <TableCell sx={{ border: 2, borderColor: '#28100C', fontSize: '25px', fontWeight: 'bold', color: '#1B0201' }}>{results.name}</TableCell>
                                                    <TableCell sx={{ border: 2, borderColor: '#28100C', fontSize: '20px', fontWeight: 'bold', color: '#1B0201' }}>{results.race}</TableCell>
                                                    <TableCell sx={{ border: 2, borderColor: '#28100C', fontSize: '20px', fontWeight: 'bold', color: '#1B0201' }}>{results.chrClass}</TableCell>
                                                    <TableCell sx={{ border: 2, borderColor: '#28100C' }}>
                                                        <button className="btn2" style={{ backgroundColor: '#28100c00', color: '#28100C', borderColor: '#28100C', fontWeight: 'bold'}} variant="outlined" id={results.id} onClick={e => fetchCharacter(e)}>View Character</button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }) : null
                                }
                            </TableBody>
                            {
                            (viewEditCharacter === true &&
                            localStorage.getItem('token')) ?
                            <CharacterEdit toggleViewEditCharacter={toggleViewEditCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters} fetchCharacter={fetchCharacter} toggleViewCharacter={toggleViewCharacter}/> :
                            null
                            }
                        </Table>
                </ThemeProvider>
            </TableContainer> 
        </div>
    )

}

export default CharacterTable;


{/* <Table id="table">
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
                                    <TableCell sx={{ border: 3, bgcolor: '#28100cb0', borderColor: '#28100C', fontSize: '30px', fontWeight: 'bold', color: '#E3DAC9' }}>Name</TableCell>
                                    <TableCell sx={{ border: 3, bgcolor: '#28100cb0', borderColor: '#28100C', fontSize: '30px', fontWeight: 'bold', color: '#E3DAC9' }}>Race</TableCell>
                                    <TableCell sx={{ border: 3, bgcolor: '#28100cb0', borderColor: '#28100C', fontSize: '30px', fontWeight: 'bold', color: '#E3DAC9' }}>Class</TableCell>
                                    <TableCell sx={{ border: 3, bgcolor: '#28100cb0', borderColor: '#28100C', fontSize: '30px', fontWeight: 'bold', color: '#E3DAC9' }}>View Character</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ border: 3 }}>
                                {
                                    (props.results) ?
                                        props.results.map((results, id) => {
                                            return (
                                                <TableRow key={id}>
                                                    <TableCell sx={{ border: 2, borderColor: '#28100C', fontSize: '25px', fontWeight: 'bold', color: '#1B0201' }}>{results.name}</TableCell>
                                                    <TableCell sx={{ border: 2, borderColor: '#28100C', fontSize: '20px', fontWeight: 'bold', color: '#1B0201' }}>{results.race}</TableCell>
                                                    <TableCell sx={{ border: 2, borderColor: '#28100C', fontSize: '20px', fontWeight: 'bold', color: '#1B0201' }}>{results.chrClass}</TableCell>
                                                    <TableCell sx={{ border: 2, borderColor: '#28100C' }}>
                                                        <button className="btn2" style={{ backgroundColor: '#28100c00', color: '#28100C', borderColor: '#28100C', fontWeight: 'bold'}} variant="outlined" id={results.id} onClick={e => fetchCharacter(e)}>View Character</button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }) : null
                                }
                            </TableBody>
                            {
                            (viewEditCharacter === true &&
                            localStorage.getItem('token')) ?
                            <CharacterEdit toggleViewEditCharacter={toggleViewEditCharacter} character={character} token={props.token} fetchCharacters={props.fetchCharacters} fetchCharacter={fetchCharacter} toggleViewCharacter={toggleViewCharacter}/> :
                            null
                            }
                        </Table>
                </ThemeProvider>
            </TableContainer> */}



{/* <Table id="table">
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
            <Box>
                <Grid id='stuff'>
                    <p id='name'>Name</p>
                    <p id='race'>Race</p>
                    <p>Class</p>
                    <p>View Character</p>
                </Grid>
            </Box> */}