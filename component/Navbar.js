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
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57833 8.08168C8.50065 8.00508 8.43897 7.91381 8.39687 7.81317C8.35477 7.71253 8.33309 7.60452 8.33309 7.49543C8.33309 7.38634 8.35477 7.27833 8.39687 7.17769C8.43897 7.07705 8.50065 6.98578 8.57833 6.90918C8.73585 6.75371 8.94826 6.66653 9.16958 6.66653C9.3909 6.66653 9.60332 6.75371 9.76083 6.90918L12.2317 9.35918C12.3168 9.44362 12.3844 9.5441 12.4306 9.6548C12.4767 9.76551 12.5004 9.88425 12.5004 10.0042C12.5004 10.1241 12.4767 10.2429 12.4306 10.3536C12.3844 10.4643 12.3168 10.5647 12.2317 10.6492L9.76917 13.0908C9.61161 13.2466 9.39902 13.3339 9.1775 13.3339C8.95598 13.3339 8.74339 13.2466 8.58583 13.0908C8.50815 13.0142 8.44647 12.923 8.40437 12.8223C8.36227 12.7217 8.34059 12.6137 8.34059 12.5046C8.34059 12.3955 8.36227 12.2875 8.40437 12.1869C8.44647 12.0862 8.50815 11.9949 8.58583 11.9183L10.5175 10.0042L8.57833 8.08168Z" fill="currentColor" />
                            </svg>
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