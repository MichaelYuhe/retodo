import Diary from "./Diary"

const Diaries = ({ diaries, onDelete, onToggle }) => {
    return (
        <>
            {diaries.map((diary) => (
                <Diary key={diary.id} diary={diary}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </>
    )
}

export default Diaries
