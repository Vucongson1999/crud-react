import React, { Component } from 'react'
import UseContainer from '../container/useContainer'
import StatusContainer from '../container/statusContainer'
export default class HomePage extends Component {
    render() {
        return (
            <div style={{ display: 'flex', }}>
                <div>
                    <h1>Trạng Thái</h1>
                    <StatusContainer />

                </div>
                <div style={{ marginLeft: '100px' }}>
                    <h1>Nhân Viên</h1>
                    <UseContainer />
                </div>

            </div>
        )
    }
}
