import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }))
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? 'Confirmed' : 'Confirm?'}
            </button>
        )
    }
}

export default ConfirmButton;