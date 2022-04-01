import { useState } from "react";

export const Address = () => {
    const [name, setName] = useState('');
    const onChange = (e) => {
        const { value } = e.target;
        setName(value);
    }
    const showData = () => {
        console.log("Name", name);
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <p>First Name</p>
                <label>
                    <input onChange={onChange} name="name" value={name} />
                </label>

                <div>
                    <button>CLOSE</button>
                    <button onClick={showData} >ADD NEW ADDRESS</button>
                </div>
            </form>
        </>
    );
}