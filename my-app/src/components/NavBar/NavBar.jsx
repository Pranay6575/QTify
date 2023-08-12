import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './NavBar.module.css'
import Search from '../SearchBar/Search'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Search placeholder="Search a album of your choice" />
        <Button children="Give Feedback"/>
    </nav>
  )
}

export default NavBar
