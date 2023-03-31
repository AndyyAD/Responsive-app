import React from 'react'
import Image from 'next/image'
import navStyle from '@/styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={navStyle.navbar}>
            <div className={navStyle.navContainer}>
                <div className={navStyle.navWrap}>
                    <div className={navStyle.hamMenu}>
                        <div className={navStyle.hamLines}>
                            <span className={navStyle.hamLine}> </span>
                            <span className={navStyle.hamLine}> </span>
                            <span className={navStyle.hamLine}> </span>
                        </div>
                        <div className={navStyle.userWrap}>
                            <Image className={navStyle.avatar}
                                src="avatar.svg"
                                alt="user avatar"
                                height={24}
                                width={24}
                            />
                            <p className={navStyle.avatarText}> Hi, Traveller </p>
                            <Image className={navStyle.avatarArrow}
                                src="arrow-grey.svg"
                                alt="down facing arrow"
                                height={25}
                                width={31}
                            />
                        </div>
                    </div>
                    <Image className={navStyle.logo}
                        src="logo.svg"
                        alt="Logo of teleport"
                        height={50}
                        width={80}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar