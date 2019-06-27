// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    handleFocus = () => {
        console.log("Good!")
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return(
            <React.Fragment>
                <button 
                    onFocus = {this.handleFocus}
                    onBlur = {this.handleBlur} 
                    />
                {/* <input 
                    type="button"
                    onFocus = {this.handleFocus}
                    onBlur = {this.handleBlur} 
                /> */}
            </React.Fragment>
        )
    }

}

export default EyesOnMe