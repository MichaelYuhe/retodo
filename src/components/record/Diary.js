import { FaTimes } from 'react-icons/fa'

const Diary = ({ diary, onDelete, onToggle }) => {
    return (
        <div className='task'
            onDoubleClick={() => onToggle(diary.id)}>
            <h3>{diary.title}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(diary.id)} />
            </h3>
            <p>{diary.day}</p>
        </div>
    )
}

export default Diary
