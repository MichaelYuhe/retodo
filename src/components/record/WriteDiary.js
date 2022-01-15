import { useState } from "react";

const WriteDiary = ({ onWrite }) => {
    const [emotion, setEmotion] = useState('')
    const [day, setDay] = useState('')
    const [content, setContent] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (!content || !day) {
            alert('No Content')
            return
        }
        onWrite({ day, emotion, content })
        setDay('')
        setEmotion('')
        setContent('')
    }

    return (
        <form className="diary-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label >Date</label>
                <input type="text" placeholder='What&#39;s the date today?'
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Enjoy today?</label>
                {/* todo: 选择emoji */}
            </div>
            <div className="form-control">
                <label>Content</label>
                <textarea></textarea>
            </div>
        </form>
    )

}

export default WriteDiary