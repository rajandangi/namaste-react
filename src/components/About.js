import UserClass from "./UserClass";
import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor');
    }

    componentDidMount() {
        console.log('Parent componentDidMount');
    }

    render() {
        console.log('Parent Render');
        return (
            <div className="mx-1">
                <h1 className="text-2xl py-3">About Us</h1>
                <UserClass name="rajandangi" />
            </div>
        )
    }
}

export default About;