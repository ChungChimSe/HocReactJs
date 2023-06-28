import React, { Fragment } from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        LastName: '',
    }

    handlefirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handlelastName = (event) => {
        this.setState({
            LastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> Data : ', this.state)
    }
    render() {
        return (
            <>
                <div>Đăng Ky</div>



            </>

        )
    }
}
export default ChildComponent;