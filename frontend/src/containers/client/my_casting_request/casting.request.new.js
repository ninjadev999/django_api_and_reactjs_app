import React, {Component} from 'react'
import '../client.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class CastingRequestNew extends Component {
    state = {
        employStartDate: moment(),
        employEndDate: moment(),
        joinDate: moment(),
        rehearsalStartDate: moment(),
        rehearsalEndDate: moment(),
        performanceStartDate: moment(),
        performanceEndDate: moment()

    };

    textAreaStyle = {
        width: '80%'
    };

    parentStyle = {
        paddingTop: '0'
    };

    btnStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        width: '15rem'
    };

    handleChangeEmployStartDate = (date) => {
        this.setState({
            employStartDate: date
        });
    };

    handleChangeEmployEndDate = (date) => {
        this.setState({
            employEndDate: date
        });
    };

    handleChangeJoinDate = (date) => {
        this.setState({
            joinDate: date
        })
    };

    handleChangeRehearsalStartDate = (date) => {
        this.setState({
            rehearsalStartDate: date
        })
    };

    handleChangeRehearsalEndDate = (date) => {
        this.setState({
            rehearsalEndDate: date
        })
    };

    handleChangePerformanceStartDate = (date) => {
        this.setState({
            performanceStartDate: date
        })
    };

    handleChangePerformanceEndDate = (date) => {
        this.setState({
            performanceEndDate: date
        })
    };

    onCancelCastingRequest = () => {
        window.location.href = "/client/request_selection"
    };

    onAddCastingRequest = () => {
        window.location.href = "/client/casting_request/confirm"
    };

    render() {
        return (
            <div className="ml-5">
                <div className="title text-center mt-3" style={this.parentStyle}>New Casting Request</div>

                <div className="mt-3">
                    <div className="master-title">
                        Create a name for this Casting Request:
                    </div>
                    <input className="form-control form-control-sm" style={this.textAreaStyle} placeholder="Type Casting Request name here…"/>
                </div>

                <div className="mt-3">
                    <div className="master-title">
                        What Ship?
                    </div>
                    <input className="form-control form-control-sm" style={this.textAreaStyle} placeholder="Type ship name here…"/>
                </div>

                <div className="mt-3">
                    <div className="master-title">
                        What are the dates of employment (including rehearsal and performance, if applicable)?
                    </div>
                    <div className="d-flex">
                        <div className="text-muted mr-2"><small>From</small></div>
                        <DatePicker className="mr-4" selected={this.state.employStartDate} onChange={this.handleChangeEmployStartDate}/>
                        <div className="text-muted mr-2"><small>To</small></div>
                        <DatePicker selected={this.state.employEndDate} onChange={this.handleChangeEmployEndDate}/>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="master-title">
                        On what date will talent join the ship?
                    </div>
                    <DatePicker selected={this.state.joinDate} onChange={this.handleChangeJoinDate}/>
                </div>

                <div className="mt-3">
                    <div className="master-title">
                        What are the rehearsal dates (if applicable)?
                    </div>
                    <div className="d-flex">
                        <div className="text-muted mr-2"><small>From</small></div>
                        <DatePicker className="mr-4" selected={this.state.rehearsalStartDate} onChange={this.handleChangeRehearsalStartDate}/>
                        <div className="text-muted mr-2"><small>To</small></div>
                        <DatePicker selected={this.state.rehearsalEndDate} onChange={this.handleChangeRehearsalEndDate}/>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="master-title">
                        Where will rehearsals be held?
                    </div>
                    <input className="form-control form-control-sm" style={this.textAreaStyle} placeholder="Type rehearsal location name here…" />
                </div>

                <div className="mt-3">
                    <div className="master-title">
                        What are the performance dates (if applicable)?
                    </div>
                    <div className="d-flex">
                        <div className="text-muted mr-2"><small>From</small></div>
                        <DatePicker className="mr-4" selected={this.state.performanceStartDate} onChange={this.handleChangePerformanceStartDate}/>
                        <div className="text-muted mr-2"><small>To</small></div>
                        <DatePicker selected={this.state.performanceEndDate} onChange={this.handleChangePerformanceEndDate}/>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="master-title">
                        Visa requirements (if any) for this Casting Request:
                    </div>
                    <textarea style={this.textAreaStyle} placeholder="Type visa requirements here…" rows="3"></textarea>
                </div>

                <div className="mt-3">
                    <div className="master-title">
                        Comments
                    </div>
                    <textarea style={this.textAreaStyle} placeholder="Type comments here…" rows="5"></textarea>
                </div>

                <div className="mt-3 text-center">
                    <button className="btn btn-success" style={this.btnStyle} onClick={this.onAddCastingRequest}>
                        Add Casting Request
                    </button>
                </div>

                <div className="mt-2 text-center pb-4">
                    <button className="btn btn-dark" style={this.btnStyle} onClick={this.onCancelCastingRequest}>
                        Cancel and Return
                    </button>
                </div>
            </div>
        )
    }
}

export default CastingRequestNew