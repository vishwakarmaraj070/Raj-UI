import React, { Component } from 'react'
import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink to="/button" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Buttons
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/text" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Texts
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/icon" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Icons
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/form" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Forms
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/preloader" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        Preloaders
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/list" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        Lists
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/radiobutton" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        Radio Buttons
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/checkbox" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        CheckBoxses
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/background" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        Background
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
        )
    }
}
