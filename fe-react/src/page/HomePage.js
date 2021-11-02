import React, { Component } from 'react'
import StudentContainer from '../container/studentContainer'
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <StudentContainer/>
            </div>
        )
    }
}
