import React from 'react'
import CharacterTable from './CharacterTable';
import CharacterCreate from './CharacterCreate';

const CharacterIndex = (props) => {
    return (
        <div>
            <CharacterTable />
            <CharacterCreate token={props.token} />
        </div>
    )
}

export default CharacterIndex;