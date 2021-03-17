import React, { useState } from 'react'
import styles from './Sidebar.css'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Stars } from '../stars/stars'

export function Sidebar() {
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState('Overview');

    const showSidebar = () => setVisible(!visible);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={styles.hamburger}>
                <Link to='#'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            
            <nav className={visible ? [styles.sidebar, styles.visible].join(' ') : styles.sidebar}>
                <Stars/>
                <ul className={styles.sidebarList}>
                    {SidebarData.map((item, index) => {
                        return (
                            <li 
                                key={index} 
                                className={active === item.title ? [styles.row, styles.active].join(' ') : styles.row} 
                                onClick={() => setActive(item.title)}
                            >
                                <Link to={item.path}>
                                    <div className={styles.icon}>{item.icon}</div>
                                    <div className={styles.text}>{item.title}</div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    )
}