import React from 'react';
import { GITHUB_API } from '../utils/constants';
import Shimmer from './Shimmer';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            userInfo: {},
            error: null
        }

        console.log(this.props.name + ' - child Constructor');
    }

    async componentDidMount() {
        console.log(this.props.name + ' - child componentDidMount');
        try {
            const response = await fetch(GITHUB_API + this.props.name);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            this.setState({
                userInfo: data
            });
        } catch (error) {
            this.setState({
                error: error
            });
        }
    }

    componentDidUpdate() {
        console.log('This will be called after every render');
    }

    componentWillUnmount() {
        console.log('This will be called before unmounting the component');
    }

    render() {
        const { count, userInfo, error } = this.state;

        console.log(this.props.name + ' - child Render');

        if (error) {
            return <div>Error: {error}</div>
        }

        if (Object.keys(userInfo).length === 0) {
            return <Shimmer />
        }

        return (
            <div className='p-4 border border-solid border-gray-300 rounded-md space-y-2'>
                <h2 className='text-xl'>{userInfo.name}</h2>
                <p>{userInfo.blog}</p>
                <p>{userInfo.location}</p>
                <p>Github: {userInfo.html_url}</p>
                <hr></hr>
                <p>Count: {count}</p>
                <button className="bg-green-200 border-none py-2 px-4 rounded-lg cursor-pointer text-[1rem] text-custom-gray-300 hover:bg-green-300"
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