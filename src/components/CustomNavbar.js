import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/resources/logo.png'
export default class CustomNavbar extends React.Component {

  render() {

    return (
      <div className="bg-transparent text-right text-lg-left">
        <Link to="/">
          <img alt="Logo" src={logo} className="logo bg-white"/>
        </Link>
      </div>
)
 }
}