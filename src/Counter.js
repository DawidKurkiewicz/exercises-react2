import React from 'react'
import Button from './components/Button'

class Counter extends React.Component {
    state = {
        number: this.props.startNumber || 0
    }

    incHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }
    decHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }
    resetHandler = () => {
        this.setState({ number: this.props.startNumber || 0})
    }
    zeroHandler = () => {
        this.setState({ number: this.state.number - this.state.number })

    }

    multiHandler = () => {
        this.setState({ number: this.state.number * this.state.number })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.incHandler}
                    label={'+'}
                />
                <Button
                    onClick={this.decHandler}
                    label={'-'}
                />
                <Button
                    onClick={this.resetHandler}
                    label={'reset'}
                />
                <Button
                    onClick={this.zeroHandler}
                    label={'zero'}
                />
                <Button
                    onClick={this.multiHandler}
                    label={'multi'}
                />
            </div>

        )
    }
}


export default Counter