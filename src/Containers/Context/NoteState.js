import react from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    const state = {
        "name" : "somilpatel",
        "class" : "5b"
    }
    return (
        <NoteState.provider value={state}>
            { props.children }
        </NoteState.provider>
    )
}

export default NoteState;