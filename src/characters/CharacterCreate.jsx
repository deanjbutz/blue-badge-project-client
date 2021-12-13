import React, {useEffect, useState} from "react";

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

    useEffect(() => {
        fetchRaces()
    }, [])

    return (
        <div>
            <h3>CharacterCreate</h3>
            <label htmlFor="race">Race:</label>
            <select name="race" id="race" onChange={(e) => setRace(e.target.value)}>
                <option disabled selected>Please select a race</option>
                {
                    (races) ? 
                    races.results.map((races,id) => {
                        return (
                            <option key={id} value={races.index}>{races.name}</option>
                        )
                    }) : null
                }
            </select>
            <p>You selected race: {race}</p> {/*//! just to visually show state in the dom*/}
        </div>
    )
}

export default CharacterCreate;