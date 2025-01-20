import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        const { name, email, location } = this.props;
        const { count } = this.state;

        return (
            <div className='user-profile'>
                <h2>User Profile</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Location: {location}</p>
                <p>Count: {count}</p>
                <button className="btn"
                    onClick={() => {
                        this.setState({
                            count: count + 1
                        })
                    }}
                >Increment Count</button>
            </div>
        )
    }
}

export default UserClass;