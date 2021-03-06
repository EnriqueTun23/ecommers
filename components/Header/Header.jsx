import React from 'react'
import { MenuWeb } from './Menu/Menu'
import { TopBar } from './TopBar/TopBar'

export default function Header() {
    return (
        <div className="header">
            <TopBar />
            <MenuWeb />
        </div>
    )
}

