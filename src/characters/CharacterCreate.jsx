import React, {useEffect, useState} from "react";
import { Label } from 'reactstrap';

const CharacterCreate = (props) => {

    const baseURL = "https://www.dnd5eapi.co/api/"
    const racesEndpoint = `${baseURL}races/`

    const [races, setRaces] = useState('')
    const [race, setRace] = useState('')

    const fetchRaces = () => {
        fetch(racesEndpoint)
        .then(res => res.json())
        .then(data => setRaces(data))
        .then(console.log(races))
        .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3025/character/`, {
            method: "POST",
            body: JSON.stringify({ 
                "race": race,
                "chrClass": "this won't work",
                "background": "string",
                "level": 1234,
                "stength": 1234,
                "dexterity": 1234,
                "intelligence": 1234,
                "wisdom": 1234,
                "charisma": 1234,
                "classSkill": "string",
                "backgroundTool": "string",
                "raceLanguage": "string",
                "fightingStyle": "string",
                "backgroundSpeciality": "string",
                "hitPoints": 1234,
                "knownSpell": "string",
                "armor": "string",
                "weapon": "string",
                "tool": "string",
                "name": "string",
                "gender": "string",
                "height": 1234,
                "weight": 1234,
                "characterBackstory": "string",
                "owner_id": 1234
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${props.token}`
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchRaces()
    }, [])

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>CharacterCreate</h3>

                {/*//! Race Dropdown */}
                <Label htmlFor="race">Race: </Label>
                <select name="race" id="race" onChange={(e) => setRace(e.target.value)}>
                    <option disabled selected>Please select a race</option>
                    {
                        (races) ?
                        races.results.map((races,id) => {
                            return (
                                <option key={id} value={races.name}>{races.name}</option>
                            )
                        }) : null
                    }
                </select>
                {/*//! Race Dropdown*/}

                {/*//! Class Dropdown*/}
                {/*//! Class Dropdown*/}

                <p>You selected race: {race}</p> {/*//! just to visually show state in the dom*/}
                <button className="submit">Create Character</button>
                {props.token}
            </form>
        </div>
    )
}

export default CharacterCreate;