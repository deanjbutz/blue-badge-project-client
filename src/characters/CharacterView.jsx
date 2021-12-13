import React, {useState} from 'react';
import { Table } from 'reactstrap';

const CharacterView = (props) => {

    const [pies, setPies] = useState('')

    const getCharacters = (charcater) => {
        fetch(`http://localhost:3025/character`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
            // .then(() => props.fetchCharacters())
            .then(res => res.json())
        .then(data => setPies(data))
        .catch(err => console.log(err))
    }
    console.log(props.character)
    getCharacters()

    const characterMapper = () => {
        return props.character.map((character, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{character.id}</th>
                    <td>{character.race}</td>
                    <td>{character.chrClass}</td>
                    <td>{character.background}</td>
                    <td>{character.level}</td>
                    <td>{character.stength}</td>
                    <td>{character.dexterity}</td>
                    <td>{character.intelligence}</td>
                    <td>{character.wisdom}</td>
                    <td>{character.charisma}</td>
                    <td>{character.classSkill}</td>
                    <td>{character.backgroundTool}</td>
                    <td>{character.raceLanguage}</td>
                    <td>{character.fightingStyle}</td>
                    <td>{character.backgroundSpeciality}</td>
                    <td>{character.hitPoints}</td>
                    <td>{character.knownSpell}</td>
                    <td>{character.armor}</td>
                    <td>{character.weapon}</td>
                    <td>{character.tool}</td>
                    <td>{character.name}</td>
                    <td>{character.gender}</td>
                    <td>{character.height}</td>
                    <td>{character.weight}</td>
                    <td>{character.characterBackstory}</td>
                    <td>{character.owner_id}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <h3>Characters</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <td>race</td>
                        <td>chrClass</td>
                        <td>background</td>
                        <td>level</td>
                        <td>stength</td>
                        <td>dexterity</td>
                        <td>intelligence</td>
                        <td>wisdom</td>
                        <td>charisma</td>
                        <td>classSkill</td>
                        <td>backgroundTool</td>
                        <td>raceLanguage</td>
                        <td>fightingStyle</td>
                        <td>backgroundSpeciality</td>
                        <td>hitPoints</td>
                        <td>knownSpell</td>
                        <td>armor</td>
                        <td>weapon</td>
                        <td>tool</td>
                        <td>name</td>
                        <td>gender</td>
                        <td>height</td>
                        <td>weight</td>
                        <td>characterBackstory</td>
                        <td>owner_id</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {characterMapper()} */}
                </tbody>
            </Table>
        </>
    )
}

export default CharacterView;