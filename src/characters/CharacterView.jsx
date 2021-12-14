import React, {useState} from 'react';
import { Table, Button, Modal } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterView = (props) => {

    const deleteCharacter = (character) => {

        const payload = JSON.parse(window.atob(props.token.split('.')[1]))

        fetch(`http://localhost:3025/character/${character.id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                "user": {
                    "id": payload.id
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
        })
        .then(res => console.log(res))
        .then(() => props.fetchCharacters())
        .then(() => props.toggleViewCharacter())
        // .then(res => res.json())
        // .then(data => console.log(data))
        .catch(err => console.log(err))
        // .then() //! do we need something here to close the character view "window"
    }

    return (
        <div>
        {/* <Modal isOpen={true}> */}
            <h3>{props.character.name}</h3>
            <Table striped>
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                        <td>
                            <Button color="warning" onClick={() => {props.editCharacter(props.character); props.updateOn()}}>Edit</Button>
                        </td>
                        <td>
                            <Button color="danger" onClick={() => {deleteCharacter(props.character)}}>Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        {/* </Modal> */}
        </div>
    )
}

export default CharacterView;