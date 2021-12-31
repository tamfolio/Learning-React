import React, { Component } from 'react'

 class FormsPractice extends Component {
     constructor() {
         super();
         this.state = {
             firstName: '',
             lastName: '',
             age: 0,
             gender: '',
             destination: '',
             isVegan: false,
             isKosher: false,
             isLactoseFree: false
    
         }
         this.handleChange = this.handleChange.bind(this)
     }

     handleChange(event) {
         const {name, value ,type, checked} = event.target
         type === 'checkbox' ?  
         this.setState({
             [name] : checked
         })
         :
         this.setState({
             [name]: value
         })
        }
    render() {
        return (
            <main>
                <form>
                    <input
                     name='firstName'
                    value={this.state.firstName}
                    placeholder='First Name'
                    onChange={this.handleChange} />
                    <br/>
                    <input
                     name='lastName'
                    value={this.state.lastName}
                    placeholder='Last Name' 
                    onChange={this.handleChange}/><br/>
                    <input
                    name='age' 
                    value={this.state.age}
                    placeholder='Age'
                    onChange={this.handleChange} />
                    
                    <br/>

                    <label>
                        <input 
                        type="radio" 
                        name="gender"
                        value="male" 
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                        />Male
                    </label>

                    <br/>

                    <label>
                        <input 
                        type="radio" 
                        name="gender"
                        value="female" 
                        checked={this.state.gender === 'female'}
                        onChange={this.handleChange}
                        /> female
                    </label>

                    <br/>

                    <select
                     value={this.state.destination} 
                     name='destination'
                     onChange={this.handleChange}
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
                         onChange={this.handleChange}
                         checked={this.state.isVegan} 
                         /> Vegan?

                    </label>

                    <br/>

                    <label>
                        <input
                         type="checkbox"
                         name='isKosher'
                         onChange={this.handleChange}
                         checked={this.state.isKosher} 
                         /> Kosher?

                    </label>
                    <br/>

                    <label>
                        <input
                         type="checkbox"
                         name='isLactoseFree'
                         onChange={this.handleChange}
                         checked={this.state.isLactoseFree} 
                         /> isLactoseFree?

                    </label>
                </form>
                    <h1>Information</h1>
                    <h2>name: {this.state.firstName} {this.state.lastName}</h2>
                    <h2>Age: {this.state.age}</h2>
                    <h2>Gender: {this.state.gender}</h2>
                    <h2>destination: {this.state.destination}</h2>
            </main>
        )
    }
}

export default FormsPractice
