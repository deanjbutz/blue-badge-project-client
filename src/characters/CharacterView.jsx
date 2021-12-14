import React, {useState} from 'react';
import { Table } from 'reactstrap';

const CharacterView = (props) => {
    return (
        <div>
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
                    </tr>
                </tbody>
            </Table>


        </div>
    )
}

export default CharacterView;