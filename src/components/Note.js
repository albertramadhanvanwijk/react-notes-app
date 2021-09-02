import { MdDeleteForever } from 'react-icons/md'

const NotesList = () => {
    return (
        <div className="note">
            <span>Hello! this is first note!</span>
            <div className="note-footer">
                <small>02/09/2001</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>

        </div>
    )
  };
  
  export default NotesList;