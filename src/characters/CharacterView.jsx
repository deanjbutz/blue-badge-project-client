import React, {useState} from 'react';
import { Button, Table } from 'reactstrap';

const CharacterView = (props) => {

    const deleteCharater = (character) => {
        fetch(`http://localhost:3025/character/${character.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
            // .then(() => props.fetchCharacters())
            .then(res => res.json())
            .then(data => console.log(data))
            // .then() //! do we need something here to close
        })
    }

    return (
        <div>
            <h3>CharacterView</h3>

            <Table striped>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Race</td>
                        <td>Class</td>
                        <td>Background</td>
                        <td>Level</td>
                        <td>Strength</td>
                        <td>Dexterity</td>
                        <td>Constitution</td>
                        <td>Intelligence</td>
                        <td>Wisdom</td>
                        <td>Charisma</td>
                        <td>ClassSkill</td>
                        <td>BackgroundTool</td>
                        <td>RaceLanguage</td>
                        <td>FightingStyle</td>
                        <td>BackgroundSpeciality</td>
                        <td>HitPoints</td>
                        <td>KnownSpell</td>
                        <td>Armor</td>
                        <td>Weapon</td>
                        <td>Tool</td>
                        <td>Gender</td>
                        <td>Height</td>
                        <td>Weight</td>
                        <td>Character Backstory</td>
                        <td>owner_id</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.character.name}</td>
                        <td>{props.character.race}</td>
                        <td>{props.character.chrClass}</td>
                        <td>{props.character.background}</td>
                        <td>{props.character.level}</td>
                        <td>{props.character.strength}</td>
                        <td>{props.character.dexterity}</td>
                        <td>{props.character.constitution}</td>
                        <td>{props.character.intelligence}</td>
                        <td>{props.character.wisdom}</td>
                        <td>{props.character.charisma}</td>
                        <td>{props.character.classSkill}</td>
                        <td>{props.character.backgroundTool}</td>
                        <td>{props.character.raceLanguage}</td>
                        <td>{props.character.fightingStyle}</td>
                        <td>{props.character.backgroundSpeciality}</td>
                        <td>{props.character.hitPoints}</td>
                        <td>{props.character.knownSpell}</td>
                        <td>{props.character.armor}</td>
                        <td>{props.character.weapon}</td>
                        <td>{props.character.tool}</td>
                        <td>{props.character.gender}</td>
                        <td>{props.character.height}</td>
                        <td>{props.character.weight}</td>
                        <td>{props.character.characterBackstory}</td>
                        <td>{props.character.owner_id}</td>
                    </tr>
                </tbody>
            </Table>
            <Button color="warning" onClick={() => {props.editCharacter(props.character); props.updateOn()}}>Edit</Button>
            <Button color="danger" onClick={() => {deleteCharater(props.character)}}>Delete</Button>
        </div>
    )
}

export default CharacterView;