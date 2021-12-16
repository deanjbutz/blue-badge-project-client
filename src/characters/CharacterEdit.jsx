import React, {useEffect, useState} from "react";
import { Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './characterEdit.css'

const CharacterEdit = (props) => {
    const baseURL = "https://www.dnd5eapi.co/api/"
    //! races
    const racesEndpoint = `${baseURL}races/`
    const [races, setRaces] = useState('')
    const [editRace, setEditRace] = useState(props.character.race)
    const fetchRaces = () => {
        fetch(racesEndpoint)
        .then(res => res.json())
        .then(data => setRaces(data))
        .then(console.log(races))
        .catch(err => console.log(err))
    }
    //! classes
    const chrClassesEndpoint = `${baseURL}classes/`
    const [chrClasses, setChrClasses] = useState('')
    const [editChrClass, setEditChrClass] = useState(props.character.chrClass)
    const fetchChrClasses = () => {
        fetch(chrClassesEndpoint)
        .then(res => res.json())
        .then(data => setChrClasses(data))
        .then(console.log(chrClasses))
        .catch(err => console.log(err))
    }
    //! backgrounds
    const [editBackground, setEditBackground] = useState(props.character.background)
    //! levels
    const [editLevel, setEditLevel] = useState(props.character.level)
    //! ability scores
    const [editStrength, setEditStrength] = useState(props.character.strength)
    const [editDexterity, setEditDexterity] = useState(props.character.dexterity)
    const [editConstitution, setEditConstitution] = useState(props.character.constitution)
    const [editIntelligence, setEditIntelligence] = useState(props.character.intelligence)
    const [editWisdom, setEditWisdom] = useState(props.character.wisdom)
    const [editCharisma, setEditCharisma] = useState(props.character.charisma)
    const totalScore = 75
    const [score, setScore] = useState(60)
    const setAbilityScoreTotal = () => {
        const totalPoints = (parseFloat(editStrength) + parseFloat(editDexterity) + parseFloat(editConstitution) + parseFloat(editIntelligence) + parseFloat(editWisdom) + parseFloat(editCharisma));
        const pointsRemaining = (totalScore - totalPoints);
        setScore(pointsRemaining)
    }
    //! class skill
    const [editClassSkill, setEditClassSkill] = useState(props.character.classSkill)
    //! background tool
    const [editBackgroundTool, setEditBackgroundTool] = useState(props.character.backgroundTool)
    //! race language
    const raceLanguagesEndpoint = `${racesEndpoint}${editRace.toLowerCase()}`
    const [raceLanguages, setRaceLanguages] = useState('')
    const [editRaceLanguage, setEditRaceLanguage] = useState(props.character.raceLanguage)
    const fetchRaceLanguages = () => {
        fetch(raceLanguagesEndpoint)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setRaceLanguages(data.languages))
        .then(console.log(raceLanguages))
        .catch(err => console.log(err))
    }
    //! fighting style
    const [editFightingStyle, setEditFightingStyle] = useState(props.character.fightingStyle)
    //! background speciality
    const [editBackgroundSpeciality, setEditBackgroundSpeciality] = useState(props.character.backgroundSpeciality)
    //! hit points
    const [editHitPoints, setEditHitPoints] = useState(props.character.hitPoints)
    //! known spell
    const spellsEndpoint = `${baseURL}spells/`
    const [spells, setSpells] = useState('')
    const [editKnownSpell, setEditKnownSpell] = useState(props.character.knownSpell)
    const fetchSpells = () => {
        fetch(spellsEndpoint)
        .then(res => res.json())
        .then(data => setSpells(data))
        .then(console.log(spells))
        .catch(err => console.log(err))
    }
    //! armor
    const armorsEndpoint = `${baseURL}equipment-categories/armor`
    const [armors, setArmors] = useState('')
    const [editArmor, setEditArmor] = useState(props.character.armor)
    const fetchArmors = () => {
        fetch(armorsEndpoint)
        .then(res => res.json())
        .then(data => setArmors(data))
        .then(console.log(armors))
        .catch(err => console.log(err))
    }
    //! weapon
    const weaponsEndpoint = `${baseURL}equipment-categories/weapon`
    const [weapons, setWeapons] = useState('')
    const [editWeapon, setEditWeapon] = useState(props.character.weapon)
    const fetchWeapons = () => {
        fetch(weaponsEndpoint)
        .then(res => res.json())
        .then(data => setWeapons(data))
        .then(console.log(weapons))
        .catch(err => console.log(err))
    }
    //! tool
    const toolsEndpoint = `${baseURL}equipment-categories/tools`
    const [tools, setTools] = useState('')
    const [editTool, setEditTool] = useState(props.character.tool)
    const fetchTools = () => {
        fetch(toolsEndpoint)
        .then(res => res.json())
        .then(data => setTools(data))
        .then(console.log(tools))
        .catch(err => console.log(err))
    }
    //! name
    const [editName, setEditName] = useState(props.character.name)
    //! gender
    const [editGender, setEditGender] = useState(props.character.gender)
    //! height
    const [editHeight, setEditHeight] = useState(props.character.height)
    //! weight
    const [editWeight, setEditWeight] = useState(props.character.weight)
    //! character backstory
    const [editCharacterBackstory, setEditCharacterBackstory] = useState(props.character.characterBackstory)


    const handleSubmit = (e) => {

        const payload = JSON.parse(window.atob(props.token.split('.')[1]))

        e.preventDefault();
        fetch(`http://localhost:3025/character/${props.character.id}`, {
            method: "PUT",
            body: JSON.stringify({ 
                "race": editRace,
                "chrClass": editChrClass,
                "background": editBackground,
                "level": editLevel,
                "strength": editStrength,
                "dexterity": editDexterity,
                "constitution": editConstitution,
                "intelligence": editIntelligence,
                "wisdom": editWisdom,
                "charisma": editCharisma,
                "classSkill": editClassSkill,
                "backgroundTool": editBackgroundTool,
                "raceLanguage": editRaceLanguage,
                "fightingStyle": editFightingStyle,
                "backgroundSpeciality": editBackgroundSpeciality,
                "hitPoints": editHitPoints,
                "knownSpell": editKnownSpell,
                "armor": editArmor,
                "weapon": editWeapon,
                "tool": editTool,
                "name": editName,
                "gender": editGender,
                "height": editHeight,
                "weight": editWeight,
                "characterBackstory": editCharacterBackstory,
                "owner_id": payload.id
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${props.token}`
            })
        })
        .then(res => res.json())
        .then(data => alert(data.message))
        .then(() => props.fetchCharacters())
        .then(() => props.toggleViewEditCharacter()) //! not working
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchRaces()
        fetchChrClasses()
        fetchSpells()
        fetchArmors()
        fetchWeapons()
        fetchTools()
    }, [])

    useEffect(() => {
        fetchRaceLanguages()
    }, [editRace])

    useEffect(() => {
        setAbilityScoreTotal()
    }, [editStrength, editDexterity, editConstitution, editIntelligence, editWisdom, editCharisma])

    return (
        <Modal isOpen={true}  style={{maxWidth: '90vw', paddingTop: '3%'}}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ModalHeader className='modal-header d-block'>
                    <input type="text" name="name" id="name" maxLength={25} defaultValue={props.character.name} onChange={(e) => setEditName(e.target.value)}/>
                </ModalHeader>

                <ModalBody>

                    <div className='selections'>

                        <div className="row1">
                            <div className='chrProp text-input'>
                                <h6>Race</h6>
                                <select name="race" id="race" onChange={(e) => setEditRace(e.target.value)}>
                                    <option value={props.character.race}>{props.character.race}</option>
                                    {
                                        (races) ?
                                        races.results.map((races,id) => {
                                            return (
                                                <option key={id} value={races.name}>{races.name}</option>
                                            )
                                        }) : null
                                    }
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Class</h6>
                                <select name="chrClass" id="chrClass" onChange={(e) => setEditChrClass(e.target.value)}>
                                    <option value={props.character.chrClass}>{props.character.chrClass}</option>
                                    {
                                        (chrClasses) ?
                                        chrClasses.results.map((chrClasses,id) => {
                                            return (
                                                <option key={id} value={chrClasses.name}>{chrClasses.name}</option>
                                            )
                                        }) : null
                                    }
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Background</h6>
                                <select name="background" id="background" onChange={(e) => setEditBackground(e.target.value)}>
                                    <option defaultValue={props.character.background}>{props.character.background}</option>
                                    <option value="Acolyte">Acolyte</option>
                                    <option value="Criminal">Criminal</option>
                                    <option value="Folk Hero">Folk Hero</option>
                                    <option value="Noble">Noble</option>
                                    <option value="Sage">Sage</option>
                                    <option value="Soldier">Soldier</option>
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Level</h6>
                                <input type="number" name="level" id="level" defaultValue={props.character.level} min={1} max={20} onChange={(e) => setEditLevel(e.target.value)}/>
                            </div>
                        </div>

                        <div className='row2'>
                            <div>
                                <div className="score-tracker">
                                    <h5 style={{whiteSpace: "normal"}}>Ability Scores</h5>
                                    {
                                        (score >= 0) ?
                                        <p>{score} points remaining</p> :
                                        <p style={{"color":"red", "font-weight": "bold"}}>Too many points - please decrease!</p>
                                    }
                                </div>
                                <div className='ability-scores'>
                                    <div className='chrProp text-input'>
                                        <h6>Strength</h6>
                                        <input type="number" name="strength" id="strength" defaultValue={props.character.strength} min={3} max={15} onChange={(e) => setEditStrength(e.target.value)} />
                                    </div>
                                    <div className='chrProp text-input'>
                                        <h6>Dexterirty</h6>
                                        <input type="number" name="dexterity" id="dexterity" defaultValue={props.character.dexterity} min={3} max={15} onChange={(e) => setEditDexterity(e.target.value)}/>
                                    </div>
                                    <div className='chrProp text-input'>
                                        <h6>Constitution</h6>
                                        <input type="number" name="constitution" id="constitution" defaultValue={props.character.constitution} min={3} max={15} onChange={(e) => setEditConstitution(e.target.value)}/>
                                    </div>
                                    <div className='chrProp text-input'>
                                        <h6>Intelligence</h6>
                                        <input type="number" name="intelligence" id="intelligence" defaultValue={props.character.intelligence} min={3} max={15} onChange={(e) => setEditIntelligence(e.target.value)}/>
                                    </div>
                                    <div className='chrProp text-input'>
                                        <h6>Wisdom</h6>
                                        <input type="number" name="wisdom" id="wisdom" defaultValue={props.character.wisdom} min={3} max={15} onChange={(e) => setEditWisdom(e.target.value)}/>
                                    </div>
                                    <div className='chrProp text-input'>
                                        <h6>Charisma</h6>
                                        <input type="number" name="charisma" id="charisma" defaultValue={props.character.charisma} min={3} max={15} onChange={(e) => setEditCharisma(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row3">
                            <div className='chrProp text-input'>
                                <h6>Class Skill</h6>
                                <select name="classSkill" id="classSkill" onChange={(e) => setEditClassSkill(e.target.value)}>
                                    <option defaultValue={props.character.classSkill}>{props.character.classSkill}</option>
                                    <option value="Arcana">Arcana</option>
                                    <option value="Athletics">Athletics</option>
                                    <option value="Bluff">Bluff</option>
                                    <option value="Diplomacy">Diplomacy</option>
                                    <option value="Dungeoneering">Dungeoneering</option>
                                    <option value="Endurance">Endurance</option>
                                    <option value="Heal">Heal</option>
                                    <option value="History">History</option>
                                    <option value="Insight">Insight</option>
                                    <option value="Intimidate">Intimidate</option>
                                    <option value="Nature">Nature</option>
                                    <option value="Perception">Perception</option>
                                    <option value="Religion">Religion</option>
                                    <option value="Stealth">Stealth</option>
                                    <option value="Streetwise">Streetwise</option>
                                    <option value="Thievery">Thievery</option>
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Background Tool</h6>
                                <select name="backgroundTool" id="backgroundTool" onChange={(e) => setEditBackgroundTool(e.target.value)}>
                                    <option defaultValue={props.character.backgroundTool}>{props.character.backgroundTool}</option>
                                    <option value="Artisan's Tools">Artisan's Tools</option>
                                    <option value="Disguise Kit">Disguise Kit</option>
                                    <option value="Forgery Kit">Forgery Kit</option>
                                    <option value="Gaming Set">Gaming Set</option>
                                    <option value="Herbalism Kit">Herbalism Kit</option>
                                    <option value="Musical Instrument">Musical Instrument</option>
                                    <option value="Navigator's Tools">Navigator's Tools</option>
                                    <option value="Theive's Tools">Theive's Tools</option>
                                    <option value="Vehicles - Land">Vehicles - Land</option>
                                    <option value="Vehicles - Water">Vehicles - Water</option>
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Race Language</h6>
                                <select name="raceLanguage" id="raceLanguage" onChange={(e) => setEditRaceLanguage(e.target.value)}>
                                    <option defaultValue={props.character.raceLanguage}>{props.character.raceLanguage}</option>
                                    {
                                        (raceLanguages) ?
                                        raceLanguages.map((raceLanguages,id) => {
                                            return (
                                                <option key={id} value={raceLanguages.name}>{raceLanguages.name}</option>
                                                )
                                        }) : null
                                    }
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Fighting Style</h6>
                                <select name="fightingStyle" id="fightingStyle" onChange={(e) => setEditFightingStyle(e.target.value)}>
                                    <option defaultValue={props.character.fightingStyle}>{props.character.fightingStyle}</option>
                                    <option value="Archery">Archery</option>
                                    <option value="Blessed Warrior">Blessed Warrior</option>
                                    <option value="Blind Fighting">Blind Fighting</option>
                                    <option value="Defense">Defense</option>
                                    <option value="Druidic Warrior">Druidic Warrior</option>
                                    <option value="Dueling">Dueling</option>
                                    <option value="Great Weapon Fighting">Great Weapon Fighting</option>
                                    <option value="Interception">Interception</option>
                                    <option value="Protection">Protection</option>
                                    <option value="Superior Technique">Superior Technique</option>
                                    <option value="Thrown Weapon Fighting">Thrown Weapon Fighting</option>
                                    <option value="Two-Weapon Fighting">Two-Weapon Fighting</option>
                                    <option value="Unarmed Fighting">Unarmed Fighting</option>
                                </select>
                            </div>
                        </div>

                        <div className="row4">
                            <div className='chrProp text-input'>
                                <h6>Background Speciality</h6>
                                <textarea type="text" name="backgroundSpeciality" id="backgroundSpeciality" defaultValue={props.character.backgroundSpeciality} rows="3" cols="30" onChange={(e) => setEditBackgroundSpeciality(e.target.value)}/>
                            </div>
                        </div>

                        <div className="row5">
                            <div className='chrProp text-input'>
                                <h6>Hit Points</h6>
                                <input type="number" name="hitPoints" id="hitPoints" defaultValue={props.character.hitPoints} onChange={(e) => setEditHitPoints(e.target.value)}/>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Known Spell</h6>
                                <select name="knownSpell" id="knownSpell" onChange={(e) => setEditKnownSpell(e.target.value)}>
                                    <option defaultValue={props.character.knownSpell}>{props.character.knownSpell}</option>
                                    {
                                        (spells) ?
                                        spells.results.map((spells,id) => {
                                            return (
                                                <option key={id} value={spells.name}>{spells.name}</option>
                                            )
                                        }) : null
                                    }
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Armor</h6>
                                <select name="armor" id="armor" onChange={(e) => setEditArmor(e.target.value)}>
                                    <option defaultValue={props.character.armor}>{props.character.armor}</option>
                                    {
                                        (armors) ?
                                        armors.equipment.map((armors,id) => {
                                            return (
                                                <option key={id} value={armors.name}>{armors.name}</option>
                                            )
                                        }) : null
                                    }
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Weapon</h6>
                                <select name="weapon" id="weapon" onChange={(e) => setEditWeapon(e.target.value)}>
                                    <option defaultValue={props.character.weapon}>{props.character.weapon}</option>
                                    {
                                        (weapons) ?
                                        weapons.equipment.map((weapons,id) => {
                                            return (
                                                <option key={id} value={weapons.name}>{weapons.name}</option>
                                            )
                                        }) : null
                                    }
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Tool</h6>
                                <select name="tool" id="tool" onChange={(e) => setEditTool(e.target.value)}>
                                    <option defaultValue={props.character.tool}>{props.character.tool}</option>
                                    {
                                        (tools) ?
                                        tools.equipment.map((tools,id) => {
                                            return (
                                                <option key={id} value={tools.name}>{tools.name}</option>
                                            )
                                        }) : null
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="row6">
                            <div className='chrProp text-input'>
                                <h6>Gender</h6>
                                <select name="gender" id="gender" onChange={(e) => setEditGender(e.target.value)}>
                                    <option defaultValue={props.character.gender}>{props.character.gender}</option>
                                    <option value="Female">Female</option>
                                    <option value="Intersex">Intersex</option>
                                    <option value="Male">Male</option>
                                </select>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Height</h6>
                                <input type="number" name="height" id="height" defaultValue={props.character.height} onChange={(e) => setEditHeight(e.target.value)}/>
                            </div>
                            <div className='chrProp text-input'>
                                <h6>Weight</h6>
                                <input type="number" name="weight" id="weight" defaultValue={props.character.weight} onChange={(e) => setEditWeight(e.target.value)}/>
                            </div>
                        </div>

                        <div className="row7">
                            <div className='chrProp text-input'>
                                <h6>Character Backstory</h6>
                                <textarea type="text" name="characterBackstory" id="characterBackstory" defaultValue={props.character.characterBackstory} rows="3" cols="30" onChange={(e) => setEditCharacterBackstory(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="submit">Submit Edit</Button>
                    <Button type="button" onClick= {() => props.toggleViewEditCharacter()}>Exit</Button>
                </ModalFooter>
            </form>
        </Modal>
    )
}
                
export default CharacterEdit;


                
                {/* //! Race Dropdown */}
                {/* <label htmlFor="race">Race:</label>
                <select name="race" id="race" onChange={(e) => setEditRace(e.target.value)}>
                    <option value={props.character.race}>{props.character.race}</option>
                    {
                        (races) ?
                        races.results.map((races,id) => {
                            return (
                                <option key={id} value={races.name}>{races.name}</option>
                            )
                        }) : null
                    }
                </select> */}
                
                {/*//! Class Dropdown*/}
                {/* <Label htmlFor="chrClass">Class: </Label>
                <select name="chrClass" id="chrClass" onChange={(e) => setEditChrClass(e.target.value)}>
                    <option value={props.character.chrClass}>{props.character.chrClass}</option>
                    {
                        (chrClasses) ?
                        chrClasses.results.map((chrClasses,id) => {
                            return (
                                <option key={id} value={chrClasses.name}>{chrClasses.name}</option>
                            )
                        }) : null
                    }
                </select> */}

                {/*//! Backgrounds Dropdown*/}
                {/* <Label htmlFor="background">Background: </Label>
                <select name="background" id="background" onChange={(e) => setEditBackground(e.target.value)}>
                    <option defaultValue={props.character.background}>{props.character.background}</option>
                    <option value="Acolyte">Acolyte</option>
                    <option value="Criminal">Criminal</option>
                    <option value="Folk Hero">Folk Hero</option>
                    <option value="Noble">Noble</option>
                    <option value="Sage">Sage</option>
                    <option value="Soldier">Soldier</option>
                </select> */}

                {/* //! Level Input */}
                {/* <Label htmlFor="level">Level: </Label>
                <input type="number" name="level" id="level" defaultValue={props.character.level} min={1} max={20} onChange={(e) => setEditLevel(e.target.value)}/> */}

                {/* //! Ability Score Inputs */}
                {/* <Label htmlFor="strength">Strength: </Label>
                <input type="number" name="strength" id="strength" defaultValue={props.character.strength} min={3} max={15} onChange={(e) => setEditStrength(e.target.value)} />
                <Label htmlFor="dexterity">Dexterity: </Label>
                <input type="number" name="dexterity" id="dexterity" defaultValue={props.character.dexterity} min={3} max={15} onChange={(e) => setEditDexterity(e.target.value)}/>
                <Label htmlFor="constitution">Constitution: </Label>
                <input type="number" name="constitution" id="constitution" defaultValue={props.character.constitution} min={3} max={15} onChange={(e) => setEditConstitution(e.target.value)}/>
                <Label htmlFor="intelligence">Intelligence: </Label>
                <input type="number" name="intelligence" id="intelligence" defaultValue={props.character.intelligence} min={3} max={15} onChange={(e) => setEditIntelligence(e.target.value)}/>
                <Label htmlFor="wisdom">Wisdom: </Label>
                <input type="number" name="wisdom" id="wisdom" defaultValue={props.character.wisdom} min={3} max={15} onChange={(e) => setEditWisdom(e.target.value)}/>
                <Label htmlFor="charisma">Charisma: </Label>
                <input type="number" name="charisma" id="charisma" defaultValue={props.character.charisma} min={3} max={15} onChange={(e) => setEditCharisma(e.target.value)}/> */}
                {/* <p>Total Points: {totalPoints}</p> */}
                {/* {
                    (score >= 0) ?
                    <p>you have {score} points remaining</p> :
                    <p style={{"color":"red", "font-weight": "bold"}}>you have {score} points remaining</p>
                } */}
                

                {/* //! Class Skill Dropdown */}
                {/* <Label htmlFor="classSkill">Class Skill: </Label>
                <select name="classSkill" id="classSkill" onChange={(e) => setEditClassSkill(e.target.value)}>
                    <option defaultValue={props.character.classSkill}>{props.character.classSkill}</option>
                    <option value="Arcana">Arcana</option>
                    <option value="Athletics">Athletics</option>
                    <option value="Bluff">Bluff</option>
                    <option value="Diplomacy">Diplomacy</option>
                    <option value="Dungeoneering">Dungeoneering</option>
                    <option value="Endurance">Endurance</option>
                    <option value="Heal">Heal</option>
                    <option value="History">History</option>
                    <option value="Insight">Insight</option>
                    <option value="Intimidate">Intimidate</option>
                    <option value="Nature">Nature</option>
                    <option value="Perception">Perception</option>
                    <option value="Religion">Religion</option>
                    <option value="Stealth">Stealth</option>
                    <option value="Streetwise">Streetwise</option>
                    <option value="Thievery">Thievery</option>
                </select> */}

                {/* //! Background Tool Dropdown */}
                {/* <Label htmlFor="backgroundTool">Background Tool: </Label>
                <select name="backgroundTool" id="backgroundTool" onChange={(e) => setEditBackgroundTool(e.target.value)}>
                    <option defaultValue={props.character.backgroundTool}>{props.character.backgroundTool}</option>
                    <option value="Artisan's Tools">Artisan's Tools</option>
                    <option value="Disguise Kit">Disguise Kit</option>
                    <option value="Forgery Kit">Forgery Kit</option>
                    <option value="Gaming Set">Gaming Set</option>
                    <option value="Herbalism Kit">Herbalism Kit</option>
                    <option value="Musical Instrument">Musical Instrument</option>
                    <option value="Navigator's Tools">Navigator's Tools</option>
                    <option value="Theive's Tools">Theive's Tools</option>
                    <option value="Vehicles - Land">Vehicles - Land</option>
                    <option value="Vehicles - Water">Vehicles - Water</option>
                </select> */}

                {/*//! Race Language Dropdown*/}
                {/* <Label htmlFor="raceLanguage">Race Language: </Label>
                <select name="raceLanguage" id="raceLanguage" onChange={(e) => setEditRaceLanguage(e.target.value)}>
                    <option defaultValue={props.character.raceLanguage}>{props.character.raceLanguage}</option>
                    {
                        (raceLanguages) ?
                        raceLanguages.map((raceLanguages,id) => {
                            return (
                                <option key={id} value={raceLanguages.name}>{raceLanguages.name}</option>
                                )
                        }) : null
                    }
                </select> */}

                {/* //! Fighting Style Dropdown */}
                {/* <Label htmlFor="fightingStyle">Fighting Style: </Label>
                <select name="fightingStyle" id="fightingStyle" onChange={(e) => setEditFightingStyle(e.target.value)}>
                    <option defaultValue={props.character.fightingStyle}>{props.character.fightingStyle}</option>
                    <option value="Archery">Archery</option>
                    <option value="Blessed Warrior">Blessed Warrior</option>
                    <option value="Blind Fighting">Blind Fighting</option>
                    <option value="Defense">Defense</option>
                    <option value="Druidic Warrior">Druidic Warrior</option>
                    <option value="Dueling">Dueling</option>
                    <option value="Great Weapon Fighting">Great Weapon Fighting</option>
                    <option value="Interception">Interception</option>
                    <option value="Protection">Protection</option>
                    <option value="Superior Technique">Superior Technique</option>
                    <option value="Thrown Weapon Fighting">Thrown Weapon Fighting</option>
                    <option value="Two-Weapon Fighting">Two-Weapon Fighting</option>
                    <option value="Unarmed Fighting">Unarmed Fighting</option>
                </select> */}

                {/* //! Background Speciality Entry */}
                {/* <Label htmlFor="backgroundSpeciality">Background Speciality: </Label>
                <textarea type="text" name="backgroundSpeciality" id="backgroundSpeciality" defaultValue={props.character.backgroundSpeciality} rows="3" cols="30" onChange={(e) => setEditBackgroundSpeciality(e.target.value)}/> */}

                {/* //! Hit Points Input */}
                {/* <Label htmlFor="hitPoints">Hit Points: </Label>
                <input type="number" name="hitPoints" id="hitPoints" defaultValue={props.character.hitPoints} onChange={(e) => setEditHitPoints(e.target.value)}/> */}

                {/*//! Known Spell Dropdown*/}
                {/* <Label htmlFor="knownSpell">Known Spell: </Label>
                <select name="knownSpell" id="knownSpell" onChange={(e) => setEditKnownSpell(e.target.value)}>
                    <option defaultValue={props.character.knownSpell}>{props.character.knownSpell}</option>
                    {
                        (spells) ?
                        spells.results.map((spells,id) => {
                            return (
                                <option key={id} value={spells.name}>{spells.name}</option>
                            )
                        }) : null
                    }
                </select> */}

                {/*//! Armor Dropdown*/}
                {/* <Label htmlFor="armor">Armor: </Label>
                <select name="armor" id="armor" onChange={(e) => setEditArmor(e.target.value)}>
                    <option defaultValue={props.character.armor}>{props.character.armor}</option>
                    {
                        (armors) ?
                        armors.equipment.map((armors,id) => {
                            return (
                                <option key={id} value={armors.name}>{armors.name}</option>
                            )
                        }) : null
                    }
                </select> */}

                {/*//! Weapon Dropdown*/}
                {/* <Label htmlFor="weapon">Weapon: </Label>
                <select name="weapon" id="weapon" onChange={(e) => setEditWeapon(e.target.value)}>
                    <option defaultValue={props.character.weapon}>{props.character.weapon}</option>
                    {
                        (weapons) ?
                        weapons.equipment.map((weapons,id) => {
                            return (
                                <option key={id} value={weapons.name}>{weapons.name}</option>
                            )
                        }) : null
                    }
                </select> */}

                {/*//! Tool Dropdown*/}
                {/* <Label htmlFor="tool">Tool: </Label>
                <select name="tool" id="tool" onChange={(e) => setEditTool(e.target.value)}>
                    <option defaultValue={props.character.tool}>{props.character.tool}</option>
                    {
                        (tools) ?
                        tools.equipment.map((tools,id) => {
                            return (
                                <option key={id} value={tools.name}>{tools.name}</option>
                            )
                        }) : null
                    }
                </select> */}

                {/* //! Name Entry */}
                {/* <Label htmlFor="name">Name: </Label>
                <input type="text" name="name" id="name" defaultValue={props.character.name} onChange={(e) => setEditName(e.target.value)}/> */}

                {/* //! Gender Dropdown */}
                {/* <Label htmlFor="gender">Gender: </Label>
                <select name="gender" id="gender" onChange={(e) => setEditGender(e.target.value)}>
                    <option defaultValue={props.character.gender}>{props.character.gender}</option>
                    <option value="Female">Female</option>
                    <option value="Intersex">Intersex</option>
                    <option value="Male">Male</option>
                </select> */}

                {/* //! Height Input */}
                {/* <Label htmlFor="height">Height(cm): </Label>
                <input type="number" name="height" id="height" defaultValue={props.character.height} onChange={(e) => setEditHeight(e.target.value)}/> */}

                {/* //! Weight Input */}
                <Label htmlFor="weight">Weight(kg): </Label>
                {/* <input type="number" name="weight" id="weight" defaultValue={props.character.weight} onChange={(e) => setEditWeight(e.target.value)}/> */}

                {/* //! Character Backstory Entry */}
                {/* <Label htmlFor="characterBackstory">Character Backstory: </Label>
                <textarea type="text" name="characterBackstory" id="characterBackstory" defaultValue={props.character.characterBackstory} rows="3" cols="30" onChange={(e) => setEditCharacterBackstory(e.target.value)}/> */}

                {/* <p>You selected race: {race}</p> //! just to visually show state in the dom
                <p>You selected class: {chrClass}</p>
                <p>You selected background: {background}</p>
                <p>You selected level: {level}</p>
                <p>You selected strength: {strength}</p>
                <p>You selected dexterity: {dexterity}</p>
                <p>You selected constitution: {constitution}</p>
                <p>You selected intelligence: {intelligence}</p>
                <p>You selected wisdom: {wisdom}</p>
                <p>You selected charisma: {charisma}</p>
                <p>You selected class skill: {classSkill}</p>
                <p>You selected background tool: {backgroundTool}</p>
                <p>You selected race language: {raceLanguage}</p>
                <p>You selected fighting style: {fightingStyle}</p>
                <p>You selected background speciality: {backgroundSpeciality}</p>
                <p>You selected hit points: {hitPoints}</p>
                <p>You selected known spell: {knownSpell}</p>
                <p>You selected armor: {armor}</p>
                <p>You selected weapon: {weapon}</p>
                <p>You selected tool: {tool}</p>
                <p>You selected name: {name}</p>
                <p>You selected gender: {gender}</p>
                <p>You selected height: {height}</p>
                <p>You selected weight: {weight}</p>
                <p>You selected characterBackstory: {characterBackstory}</p> */}
