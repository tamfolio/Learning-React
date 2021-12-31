import React from 'react'

function FormPracticeComponent(props) {
    return (
        <main>
                <form>
                    <input
                     name='firstName'
                    value={props.data.firstName}
                    placeholder='First Name'
                    onChange={props.handleChange} />
                    <br/>
                    <input
                     name='lastName'
                    value={props.data.lastName}
                    placeholder='Last Name' 
                    onChange={props.handleChange}/><br/>
                    <input
                    name='age' 
                    value={props.data.age}
                    placeholder='Age'
                    onChange={props.handleChange} />
                    
                    <br/>

                    <label>
                        <input 
                        type="radio" 
                        name="gender"
                        value="male" 
                        checked={props.data.gender === 'male'}
                        onChange={props.handleChange}
                        />Male
                    </label>

                    <br/>

                    <label>
                        <input 
                        type="radio" 
                        name="gender"
                        value="female" 
                        checked={props.data.gender === 'female'}
                        onChange={props.handleChange}
                        /> female
                    </label>

                    <br/>

                    <select
                     value={props.data.destination} 
                     name='destination'
                     onChange={props.handleChange}
                     >
                        <option value='germany'>Germany</option>
                        <option value='norway'>Norway</option>
                        <option value='england'>England</option>
                        <option value='poland'>Poland</option>
                    </select>

                    <br/>

                    <label>
                        <input
                         type="checkbox"
                         name='isVegan'
                         onChange={props.handleChange}
                         checked={props.data.isVegan} 
                         /> Vegan?

                    </label>

                    <br/>

                    <label>
                        <input
                         type="checkbox"
                         name='isKosher'
                         onChange={props.handleChange}
                         checked={props.data.isKosher} 
                         /> Kosher?

                    </label>
                    <br/>

                    <label>
                        <input
                         type="checkbox"
                         name='isLactoseFree'
                         onChange={props.handleChange}
                         checked={props.data.isLactoseFree} 
                         /> isLactoseFree?

                    </label>
                </form>
                    <h1>Information</h1>
                    <h2>name: {props.data.firstName} {props.data.lastName}</h2>
                    <h2>Age: {props.data.age}</h2>
                    <h2>Gender: {props.data.gender}</h2>
                    <h2>destination: {props.data.destination}</h2>
            </main>
    )
}

export default FormPracticeComponent
