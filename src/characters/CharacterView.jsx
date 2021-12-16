import React, {useState} from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './characterView.css'

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
        .then(res => res.json())
        .then(data => alert(data.message))
        .then(() => props.fetchCharacters())
        .then(() => props.toggleViewCharacter())
        // .then(res => res.json())
        // .then(data => console.log(data))
        .catch(err => console.log(err))
        // .then() //! do we need something here to close the character view "window"
    }

    return (
        // <div>
        <Modal isOpen={true}  style={{maxWidth: '90vw', paddingTop: '3%'}}>
            <ModalHeader className='modal-header d-block' >
                {props.character.name}
            </ModalHeader>
            <ModalBody>
                <div className='selections'>
                    <div className="row1">
                        <div className='chrProp text-input'>
                            <h6>Race</h6>
                            <p>{props.character.race}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Class</h6>
                            <p>{props.character.chrClass}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Background</h6>
                            <p>{props.character.background}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Level</h6>
                            <p>{props.character.level}</p>
                        </div>
                    </div>
                    <div className='row2'>
                        <div>
                            <h5>Ability Scores</h5>
                                    <div className='ability-scores'>
                                        <div className='chrProp text-input'>
                                            <h6>Strength</h6>
                                            <p>{props.character.strength}</p>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Dexterirty</h6>
                                            <p>{props.character.dexterity}</p>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Constitution</h6>
                                            <p>{props.character.constitution}</p>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Intelligence</h6>
                                            <p>{props.character.intelligence}</p>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Wisdom</h6>
                                            <p>{props.character.wisdom}</p>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Charisma</h6>
                                            <p>{props.character.charisma}</p>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    <div className="row3">
                        <div className='chrProp text-input'>
                            <h6>Class Skill</h6>
                            <p>{props.character.classSkill}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Background Tool</h6>
                            <p>{props.character.backgroundTool}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Race Language</h6>
                            <p>{props.character.raceLanguage}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Fighting Style</h6>
                            <p>{props.character.fightingStyle}</p>
                        </div>
                    </div>
                    <div className="row4">
                        <div className='chrProp text-input'>
                            <h6>Background Speciality</h6>
                            <p>{props.character.backgroundSpeciality}</p>
                        </div>
                    </div>
                    <div className="row5">
                        <div className='chrProp text-input'>
                            <h6>Hit Points</h6>
                            <p>{props.character.hitPoints}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Known Spell</h6>
                            <p>{props.character.knownSpell}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Armor</h6>
                            <p>{props.character.armor}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Weapon</h6>
                            <p>{props.character.weapon}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Tool</h6>
                            <p>{props.character.tool}</p>
                        </div>
                    </div>
                    <div className="row6">
                        <div className='chrProp text-input'>
                            <h6>Gender</h6>
                            <p>{props.character.gender}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Height</h6>
                            <p>{props.character.height}</p>
                        </div>
                        <div className='chrProp text-input'>
                            <h6>Weight</h6>
                            <p>{props.character.weight}</p>
                        </div>
                    </div>
                    <div className="row7">
                        <div className='chrProp text-input'>
                            <h6>Character Backstory</h6>
                            <p>{props.character.characterBackstory}</p>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
            {
                                (props.token.includes('Bearer')) ?
                                JSON.parse(window.atob(props.token.split('.')[1])).id === props.character.owner_id ?
                                    <>
                                        <td>
                                        <Button color="warning" onClick={() => props.toggleViewEditCharacter()}>Edit</Button>
                                    </td>
                                    <td>
                                        <Button color="danger" onClick={() => {deleteCharacter(props.character)}}>Delete</Button>
                                    </td>
                                    </>
                                    : null
                                : null
                            }
                <Button onClick={() => props.toggleViewCharacter()}>Close</Button>            
            </ModalFooter>
        </Modal>
    )
}

export default CharacterView;