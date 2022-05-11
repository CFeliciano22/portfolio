import './Header.scss'
import {  NavLink, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import navItems from '../navItems'
import { Component } from 'react'



export default class Header extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

render() {
    return (
        <>
            <nav className='nav'>
                <h2 className='nav__header'>Cesar</h2>
                <div className='nav__icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav__list active': 'nav__list'}>
                {navItems.map((item) => {
                    return (
                        <li key={item.id} onClick={this.handleClick}><a className={item.className} href={item.link}>{item.name}</a></li>
                    )
                })}
                </ul> 
            </nav>
        </>
    )
}
}

