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
            <h3>CharacterView</h3>
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
                        <td>{props.character.name}</td>
                        <td>{props.character.gender}</td>
                        <td>{props.character.height}</td>
                        <td>{props.character.weight}</td>
                        <td>{props.character.characterBackstory}</td>
                        <td>{props.character.owner_id}</td>
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