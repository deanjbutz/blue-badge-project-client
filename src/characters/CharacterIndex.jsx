import React from 'react'
import CharacterTable from './CharacterTable';
import CharacterCreate from './CharacterCreate';

const CharacterIndex = (props) => {
    return (
        <div>
            <CharacterTable />
            {
                (localStorage.getItem('token')) ?
                <CharacterCreate token={props.token} /> :
                null
            }
        </div>
    )
}

export default CharacterIndex;