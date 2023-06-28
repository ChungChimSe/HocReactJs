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
        console.log('check props', this.props)
        let { name, age, abc } = this.props;
        return (

            <>
                <div className="job-lists">
                    {
                        abc.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>

            </>

        )
    }
}
export default ChildComponent;