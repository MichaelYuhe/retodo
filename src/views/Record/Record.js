import Header from "../../components/basic/Header";
import Diaries from '../../components/record/Diaries'
import WriteDiary from "../../components/record/WriteDiary"

import { useState } from 'react'

import './index.css'

const Record = () => {
    const [showWrite, setShowWrite] = useState(false)
    const [diaries, setDiaries] = useState(
        [
            {
                id: 1,
                day: ' 2022 | 1 | 06',
                emotion: 'Happy',
                title: 'First',
                content: 'ipsum'
            },
            {
                id: 2,
                day: ' 2022 | 1 | 07',
                emotion: 'Tired',
                title: 'Second',
                content: 'lorem'
            },
        ]
    )

    const writeDiary = (diary) => {
        const id = diaries[diaries.length - 1].id + 1
        const newDiary = { id, ...diary }
        setDiaries([...diaries, newDiary])
    }

    return (
        <>
            <Header
                title="Diary"
                cardName='Record my day'
                onClick={() => setShowWrite(!showWrite)}
            />
            {showWrite && <WriteDiary onWrite={writeDiary}/>}
            {diaries.length > 0 ?
                (<Diaries diaries={diaries} />) :
                ('No Diary')}
        </>
    )
}

export default Record