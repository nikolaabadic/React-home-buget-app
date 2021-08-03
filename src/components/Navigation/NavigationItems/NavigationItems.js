import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './NavigationItems.module.css'
import logo from '../../../assets/img/logo.png'

const navigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" exact={props.exact}><img src={logo} alt="Logo"/></NavigationItem>
            <NavigationItem link="/" exact={props.exact}>Payments</NavigationItem>
            <NavigationItem link="/new-payment">New payment</NavigationItem>
        </ul>
    )
}

export default navigationItems