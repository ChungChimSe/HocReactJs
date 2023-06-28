import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        firstName: '',
        LastName: '',
        arrJobs: [
            {
                id: 'stt1',
                title: 'dev',
                salary: '2000$'
            },
            {
                id: 'stt2',
                title: 'manager',
                salary: '25000$'
            },
            {
                id: 'stt3',
                title: 'tester',
                salary: '23000$'
            },
        ]
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
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handlefirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.LastName}
                        onChange={(event) => this.handlelastName(event)} /><br /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} />
                </form>


                <ChildComponent
                    name={this.state.firstName}
                    age={'12'}
                    abc={this.state.arrJobs}></ChildComponent>
            </>

        )
    }
}
export default MyComponent;