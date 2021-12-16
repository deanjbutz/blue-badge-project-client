import React, {useEffect, useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';
import './characterCreate.css'

const CharacterCreate = (props) => {
    const baseURL = "https://www.dnd5eapi.co/api/"
    //! races
    const racesEndpoint = `${baseURL}races/`
    const [races, setRaces] = useState()
    const [race, setRace] = useState('')
    const fetchRaces = () => {
        fetch(racesEndpoint)
        .then(res => res.json())
        .then(data => setRaces(data))
        // .then(console.log(races))
        // .then(fetchRaceLanguages())
        .catch(err => console.log(err))
    }
    //! classes
    const chrClassesEndpoint = `${baseURL}classes/`
    const [chrClasses, setChrClasses] = useState('')
    const [chrClass, setChrClass] = useState()
    const fetchChrClasses = () => {
        fetch(chrClassesEndpoint)
        .then(res => res.json())
        .then(data => setChrClasses(data))
        // .then(console.log(chrClasses))
        .catch(err => console.log(err))
    }
    //! backgrounds
    const [background, setBackground] = useState()
    //! levels
    const [level, setLevel] = useState(1)
    //! ability scores
    const [strength, setStrength] = useState(10)
    const [dexterity, setDexterity] = useState(10)
    const [constitution, setConstitution] = useState(10)
    const [intelligence, setIntelligence] = useState(10)
    const [wisdom, setWisdom] = useState(10)
    const [charisma, setCharisma] = useState(10)
    const totalScore = 75
    const [score, setScore] = useState(60)
    const setAbilityScoreTotal = () => {
        const totalPoints = (parseFloat(strength) + parseFloat(dexterity) + parseFloat(constitution) + parseFloat(intelligence) + parseFloat(wisdom) + parseFloat(charisma));
        const pointsRemaining = (totalScore - totalPoints);
        setScore(pointsRemaining)
    }

    useEffect(() => {
        setAbilityScoreTotal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score, strength, dexterity, constitution, intelligence, wisdom, charisma])

    //! class skill
    const [classSkill, setClassSkill] = useState('')
    //! background tool
    const [backgroundTool, setBackgroundTool] = useState('')
    //! race language
    const raceLanguagesEndpoint = `${racesEndpoint}${race.toLowerCase()}`
    const [raceLanguages, setRaceLanguages] = useState('')
    const [raceLanguage, setRaceLanguage] = useState('')
    const fetchRaceLanguages = () => {
        fetch(raceLanguagesEndpoint)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setRaceLanguages(data.languages))
        // .then(console.log(raceLanguages))
        .catch(err => console.log(err))

    }
    useEffect(() => {
        fetchRaceLanguages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [race])

    //! fighting style
    const [fightingStyle, setFightingStyle] = useState('')
    //! background speciality
    const [backgroundSpeciality, setBackgroundSpeciality] = useState('')
    //! hit points
    const [hitPoints, setHitPoints] = useState(10)
    //! known spell
    const spellsEndpoint = `${baseURL}spells/`
    const [spells, setSpells] = useState('')
    const [knownSpell, setKnownSpell] = useState('')
    const fetchSpells = () => {
        fetch(spellsEndpoint)
        .then(res => res.json())
        .then(data => setSpells(data))
        // .then(console.log(spells))
        .catch(err => console.log(err))
    }
    //! armor
    const armorsEndpoint = `${baseURL}equipment-categories/armor`
    const [armors, setArmors] = useState('')
    const [armor, setArmor] = useState('')
    const fetchArmors = () => {
        fetch(armorsEndpoint)
        .then(res => res.json())
        .then(data => setArmors(data))
        // .then(console.log(armors))
        .catch(err => console.log(err))
    }
    //! weapon
    const weaponsEndpoint = `${baseURL}equipment-categories/weapon`
    const [weapons, setWeapons] = useState('')
    const [weapon, setWeapon] = useState('')
    const fetchWeapons = () => {
        fetch(weaponsEndpoint)
        .then(res => res.json())
        .then(data => setWeapons(data))
        // .then(console.log(weapons))
        .catch(err => console.log(err))
    }
    //! tool
    const toolsEndpoint = `${baseURL}equipment-categories/tools`
    const [tools, setTools] = useState('')
    const [tool, setTool] = useState('')
    const fetchTools = () => {
        fetch(toolsEndpoint)
        .then(res => res.json())
        .then(data => setTools(data))
        // .then(console.log(tools))
        .catch(err => console.log(err))
    }
    //! name
    const [name, setName] = useState('')
    //! gender
    const [gender, setGender] = useState('')
    //! height
    const [height, setHeight] = useState(170)
    //! weight
    const [weight, setWeight] = useState(62)
    //! character backstory
    const [characterBackstory, setCharacterBackstory] = useState('')

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = JSON.parse(window.atob(props.token.split('.')[1]))
        fetch(`http://localhost:3025/character/`, {
            method: "POST",
            body: JSON.stringify({ 
                "race": race,
                "chrClass": chrClass,
                "background": background,
                "level": level,
                "strength": strength,
                "dexterity": dexterity,
                "constitution": constitution,
                "intelligence": intelligence,
                "wisdom": wisdom,
                "charisma": charisma,
                "classSkill": classSkill,
                "backgroundTool": backgroundTool,
                "raceLanguage": raceLanguage,
                "fightingStyle": fightingStyle,
                "backgroundSpeciality": backgroundSpeciality,
                "hitPoints": hitPoints,
                "knownSpell": knownSpell,
                "armor": armor,
                "weapon": weapon,
                "tool": tool,
                "name": name,
                "gender": gender,
                "height": height,
                "weight": weight,
                "characterBackstory": characterBackstory,
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
        .then(() => props.createOff())
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchRaces()
        fetchChrClasses()
        fetchSpells()
        fetchArmors()
        fetchWeapons()
        fetchTools()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return (
        <Modal isOpen={true}  style={{maxWidth: '90vw', paddingTop: '3%'}}>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <FormGroup>
                    <ModalHeader className='modal-header d-block' >
                        <Input required type="text" name="name" id="name" placeholder="Enter Character Name" maxLength={25} onChange={(e) => setName(e.target.value)}/>
                    </ModalHeader>
                    <ModalBody>
                    
                        <div className='selections'>
                            <div className="row1">
                                <div className='chrProp text-input'>
                                    <h6>Race</h6>
                                    <select required name="race" id="race" onChange={(e) => setRace(e.target.value)}>
                                        <option >Please select a race</option>
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
                                    <select required name="chrClass" id="chrClass" onChange={(e) => setChrClass(e.target.value)}>
                                        <option value={''}>Please select a class</option>
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
                                    <select required name="background" id="background" onChange={(e) => setBackground(e.target.value)}>
                                        <option value={''}>Please select a background</option>
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
                                    <Input required type="number" name="level" id="level" defaultValue={1} min={1} max={20} onChange={(e) => setLevel(e.target.value)}/>
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
                                            <Input required type="number" name="strength" id="strength" defaultValue={10} min={3} max={15} onChange={(e) => setStrength(e.target.value)} />
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Dexterirty</h6>
                                            <Input required type="number" name="dexterity" id="dexterity" defaultValue={10} min={3} max={15} onChange={(e) => setDexterity(e.target.value)}/>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Constitution</h6>
                                            <Input required type="number" name="constitution" id="constitution" defaultValue={10} min={3} max={15} onChange={(e) => setConstitution(e.target.value)}/>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Intelligence</h6>
                                            <Input required type="number" name="intelligence" id="intelligence" defaultValue={10} min={3} max={15} onChange={(e) => setIntelligence(e.target.value)}/>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Wisdom</h6>
                                            <Input required type="number" name="wisdom" id="wisdom" defaultValue={10} min={3} max={15} onChange={(e) => setWisdom(e.target.value)}/>
                                        </div>
                                        <div className='chrProp text-input'>
                                            <h6>Charisma</h6>
                                            <Input required type="number" name="charisma" id="charisma" defaultValue={10} min={3} max={15} onChange={(e) => setCharisma(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row3">
                                <div className='chrProp text-input'>
                                    <h6>Class Skill</h6>
                                    <select required name="classSkill" id="classSkill" onChange={(e) => setClassSkill(e.target.value)}>
                                        <option value={''}>Please select a class skill</option>
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
                                    <select required name="backgroundTool" id="backgroundTool" onChange={(e) => setBackgroundTool(e.target.value)}>
                                        <option value={''}>Please select a background tool</option>
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
                                    <select required name="raceLanguage" id="raceLanguage" onChange={(e) => setRaceLanguage(e.target.value)}>
                                        <option value={''}>Please select a race language</option>
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
                                    <select required name="fightingStyle" id="fightingStyle" onChange={(e) => setFightingStyle(e.target.value)}>
                                        <option value={''}>Please select a fighting style</option>
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
                                    <textarea type="text" name="backgroundSpeciality" id="backgroundSpeciality" placeholder="Enter Background Speciality (optional)" rows="3" cols="30" onChange={(e) => setBackgroundSpeciality(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row5">
                                <div className='chrProp text-input'>
                                    <h6>Hit Points</h6>
                                    <Input required type="number" name="hitPoints" id="hitPoints" defaultValue={10} min={1} max={10} onChange={(e) => setHitPoints(e.target.value)}/>
                                </div>
                                <div className='chrProp text-input'>
                                    <h6>Known Spell</h6>
                                    <select required name="knownSpell" id="knownSpell" onChange={(e) => setKnownSpell(e.target.value)}>
                                        <option value={''}>Please select a known spell</option>
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
                                    <select required name="armor" id="armor" onChange={(e) => setArmor(e.target.value)}>
                                        <option value={''}>Please select an armor</option>
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
                                    <select required name="weapon" id="weapon" onChange={(e) => setWeapon(e.target.value)}>
                                    <option value={''}>Please select a weapon</option>
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
                                    <select required name="tool" id="tool" onChange={(e) => setTool(e.target.value)}>
                                        <option value={''}>Please select a tool</option>
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
                                    <select required name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                                        <option value={''}>Please select a gender</option>
                                        <option value="Female">Female</option>
                                        <option value="Intersex">Intersex</option>
                                        <option value="Male">Male</option>
                                    </select>
                                </div>
                                <div className='chrProp text-input'>
                                    <h6>Height (cm)</h6>
                                    <Input required type="number" name="height" id="height" defaultValue={170} min={1} onChange={(e) => setHeight(e.target.value)}/>
                                </div>
                                <div className='chrProp text-input'>
                                    <h6>Weight (kg)</h6>
                                    <Input required type="number" name="weight" id="weight" defaultValue={62} min={1} onChange={(e) => setWeight(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row7">
                                <div className='chrProp text-input'>
                                    <h6>Character Backstory</h6>
                                    <textarea type="text" name="characterBackstory" id="characterBackstory" placeholder="Enter Character Backstory (optional)" rows="3" cols="30" onChange={(e) => setCharacterBackstory(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="submit">Create Character</Button>
                        <Button type="button" onClick={() => props.createOff()}>Exit</Button>
                    </ModalFooter>
                </FormGroup>
            </Form>
        </Modal>
    )
}

export default CharacterCreate;