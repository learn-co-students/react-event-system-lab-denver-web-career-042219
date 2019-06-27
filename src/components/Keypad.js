// Code Keypad Component Here

import React from 'react'

class Keypad extends React.Component {
    
    handleInputPassword = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <React.Fragment>
                {/* <h1>Hello</h1> */}
                <input 
                    type="password" 
                    onKeyUp = {this.handleInputPassword}
                    />
            </React.Fragment>
        )
    }
}

export default Keypad;