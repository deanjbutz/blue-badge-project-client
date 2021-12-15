import React, {useEffect, useState} from "react";
import { Label } from 'reactstrap';

const CharacterCreate = (props) => {
    const baseURL = "https://www.dnd5eapi.co/api/"
    //! races
    const racesEndpoint = `${baseURL}races/`
    const [races, setRaces] = useState('')
    const [race, setRace] = useState('')
    const fetchRaces = () => {
        fetch(racesEndpoint)
        .then(res => res.json())
        .then(data => setRaces(data))
        .then(console.log(races))
        // .then(fetchRaceLanguages())
        .catch(err => console.log(err))
    }
    //! classes
    const chrClassesEndpoint = `${baseURL}classes/`
    const [chrClasses, setChrClasses] = useState('')
    const [chrClass, setChrClass] = useState('')
    const fetchChrClasses = () => {
        fetch(chrClassesEndpoint)
        .then(res => res.json())
        .then(data => setChrClasses(data))
        .then(console.log(chrClasses))
        .catch(err => console.log(err))
    }
    //! backgrounds
    const [background, setBackground] = useState('')
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
        .then(console.log(raceLanguages))
        .catch(err => console.log(err))
    }
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
        .then(console.log(spells))
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
        .then(console.log(armors))
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
        .then(console.log(weapons))
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
        .then(console.log(tools))
        .catch(err => console.log(err))
    }
    //! name
    const [name, setName] = useState('')
    //! gender
    const [gender, setGender] = useState('')
    //! height
    const [height, setHeight] = useState(0)
    //! weight
    const [weight, setWeight] = useState(0)
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
        .then(data => console.log(data))
        .then(() => props.fetchCharacters())
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
    }, [race])

    useEffect(() => {
        setAbilityScoreTotal()
    }, [score, strength, dexterity, constitution, intelligence, wisdom, charisma])


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>CharacterCreate</h3>
                
                {/* //! Race Dropdown */}
                <label htmlFor="race">Race:</label>
                <select name="race" id="race" onChange={(e) => setRace(e.target.value)}>
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
                
                {/*//! Class Dropdown*/}
                <Label htmlFor="chrClass">Class: </Label>
                <select name="chrClass" id="chrClass" onChange={(e) => setChrClass(e.target.value)}>
                    <option disabled selected>Please select a class</option>
                    {
                        (chrClasses) ?
                        chrClasses.results.map((chrClasses,id) => {
                            return (
                                <option key={id} value={chrClasses.name}>{chrClasses.name}</option>
                            )
                        }) : null
                    }
                </select>

                {/*//! Backgrounds Dropdown*/}
                <Label htmlFor="background">Background: </Label>
                <select name="background" id="background" onChange={(e) => setBackground(e.target.value)}>
                    <option disabled selected>Please select a background</option>
                    <option value="Acolyte">Acolyte</option>
                    <option value="Criminal">Criminal</option>
                    <option value="Folk Hero">Folk Hero</option>
                    <option value="Noble">Noble</option>
                    <option value="Sage">Sage</option>
                    <option value="Soldier">Soldier</option>
                </select>

                {/* //! Level Input */}
                <Label htmlFor="level">Level: </Label>
                <input type="number" name="level" id="level" defaultValue={1} min={1} max={20} onChange={(e) => setLevel(e.target.value)}/>

                {/* //! Ability Score Inputs */}
                <Label htmlFor="strength">Strength: </Label>
                <input type="number" name="strength" id="strength" defaultValue={10} min={3} max={15} onChange={(e) => setStrength(e.target.value)} />
                <Label htmlFor="dexterity">Dexterity: </Label>
                <input type="number" name="dexterity" id="dexterity" defaultValue={10} min={3} max={15} onChange={(e) => setDexterity(e.target.value)}/>
                <Label htmlFor="constitution">Constitution: </Label>
                <input type="number" name="constitution" id="constitution" defaultValue={10} min={3} max={15} onChange={(e) => setConstitution(e.target.value)}/>
                <Label htmlFor="intelligence">Intelligence: </Label>
                <input type="number" name="intelligence" id="intelligence" defaultValue={10} min={3} max={15} onChange={(e) => setIntelligence(e.target.value)}/>
                <Label htmlFor="wisdom">Wisdom: </Label>
                <input type="number" name="wisdom" id="wisdom" defaultValue={10} min={3} max={15} onChange={(e) => setWisdom(e.target.value)}/>
                <Label htmlFor="charisma">Charisma: </Label>
                <input type="number" name="charisma" id="charisma" defaultValue={10} min={3} max={15} onChange={(e) => setCharisma(e.target.value)}/>
                {/* <p>Total Points: {totalPoints}</p> */}
                {
                    (score >= 0) ?
                    <p>you have {score} points remaining</p> :
                    <p style={{"color":"red", "font-weight": "bold"}}>you have {score} points remaining</p>
                }
                

                {/* //! Class Skill Dropdown */}
                <Label htmlFor="classSkill">Class Skill: </Label>
                <select name="classSkill" id="classSkill" onChange={(e) => setClassSkill(e.target.value)}>
                    <option disabled selected>Please select a class skill</option>
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

                {/* //! Background Tool Dropdown */}
                <Label htmlFor="backgroundTool">Background Tool: </Label>
                <select name="backgroundTool" id="backgroundTool" onChange={(e) => setBackgroundTool(e.target.value)}>
                    <option disabled selected>Please select a background tool</option>
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

                {/*//! Race Language Dropdown*/}
                <Label htmlFor="raceLanguage">Race Language: </Label>
                <select name="raceLanguage" id="raceLanguage" onChange={(e) => setRaceLanguage(e.target.value)}>
                    <option disabled selected>Please select a race language</option>
                    {
                        (raceLanguages) ?
                        raceLanguages.map((raceLanguages,id) => {
                            return (
                                <option key={id} value={raceLanguages.name}>{raceLanguages.name}</option>
                            )
                        }) : null
                    }
                </select>

                {/* //! Fighting Style Dropdown */}
                <Label htmlFor="fightingStyle">Fighting Style: </Label>
                <select name="fightingStyle" id="fightingStyle" onChange={(e) => setFightingStyle(e.target.value)}>
                    <option disabled selected>Please select a fighting style</option>
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

                {/* //! Background Speciality Entry */}
                <Label htmlFor="backgroundSpeciality">Background Speciality: </Label>
                <textarea type="text" name="backgroundSpeciality" id="backgroundSpeciality" placeholder="Enter Background Speciality" rows="3" cols="30" onChange={(e) => setBackgroundSpeciality(e.target.value)}/>

                {/* //! Hit Points Input */}
                <Label htmlFor="hitPoints">Hit Points: </Label>
                <input type="number" name="hitPoints" id="hitPoints" defaultValue={10} onChange={(e) => setHitPoints(e.target.value)}/>

                {/*//! Known Spell Dropdown*/}
                <Label htmlFor="knownSpell">Known Spell: </Label>
                <select name="knownSpell" id="knownSpell" onChange={(e) => setKnownSpell(e.target.value)}>
                    <option disabled selected>Please select a known spell</option>
                    {
                        (spells) ?
                        spells.results.map((spells,id) => {
                            return (
                                <option key={id} value={spells.name}>{spells.name}</option>
                            )
                        }) : null
                    }
                </select>

                {/*//! Armor Dropdown*/}
                <Label htmlFor="armor">Armor: </Label>
                <select name="armor" id="armor" onChange={(e) => setArmor(e.target.value)}>
                    <option disabled selected>Please select an armor</option>
                    {
                        (armors) ?
                        armors.equipment.map((armors,id) => {
                            return (
                                <option key={id} value={armors.name}>{armors.name}</option>
                            )
                        }) : null
                    }
                </select>

                {/*//! Weapon Dropdown*/}
                <Label htmlFor="weapon">Weapon: </Label>
                <select name="weapon" id="weapon" onChange={(e) => setWeapon(e.target.value)}>
                    <option disabled selected>Please select a weapon</option>
                    {
                        (weapons) ?
                        weapons.equipment.map((weapons,id) => {
                            return (
                                <option key={id} value={weapons.name}>{weapons.name}</option>
                            )
                        }) : null
                    }
                </select>

                {/*//! Tool Dropdown*/}
                <Label htmlFor="tool">Tool: </Label>
                <select name="tool" id="tool" onChange={(e) => setTool(e.target.value)}>
                    <option disabled selected>Please select a tool</option>
                    {
                        (tools) ?
                        tools.equipment.map((tools,id) => {
                            return (
                                <option key={id} value={tools.name}>{tools.name}</option>
                            )
                        }) : null
                    }
                </select>

                {/* //! Name Entry */}
                <Label htmlFor="name">Name: </Label>
                <input type="text" name="name" id="name" placeholder="Enter Character Name" onChange={(e) => setName(e.target.value)}/>

                {/* //! Gender Dropdown */}
                <Label htmlFor="gender">Gender: </Label>
                <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                    <option disabled selected>Please select a gender</option>
                    <option value="Female">Female</option>
                    <option value="Intersex">Intersex</option>
                    <option value="Male">Male</option>
                </select>

                {/* //! Height Input */}
                <Label htmlFor="height">Height(cm): </Label>
                <input type="number" name="height" id="height" defaultValue={170} onChange={(e) => setHeight(e.target.value)}/>

                {/* //! Weight Input */}
                <Label htmlFor="weight">Weight(kg): </Label>
                <input type="number" name="weight" id="weight" defaultValue={62} onChange={(e) => setWeight(e.target.value)}/>

                {/* //! Character Backstory Entry */}
                <Label htmlFor="characterBackstory">Character Backstory: </Label>
                <textarea type="text" name="characterBackstory" id="characterBackstory" placeholder="Enter Character Backstory" rows="3" cols="30" onChange={(e) => setCharacterBackstory(e.target.value)}/>

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

                <button className="submit">Create Character</button>
                {/* {props.token} */}
            </form>
        </div>
    )
}

export default CharacterCreate;