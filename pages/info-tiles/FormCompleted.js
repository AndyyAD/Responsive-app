import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import tiles from '@/styles/tiles.module.css'

const FormCompleted = () => {
    const [drop, setDrop] = useState(false)
    const [text, setText] = useState(false)
    const [rotated, setRotated] = useState(false)

    return (
        <>
            <section className={tiles.fcMain}>
                <div className={tiles.countryWrap}>
                    <Image className={tiles.flag}
                        src="/flag.svg"
                        alt="uk flag"
                        width={18}
                        height={20}
                    />
                    <div>
                        <h2 className={tiles.countryName}> United Kingdom (UK) </h2>
                        <p className={tiles.countryTag}> #T687916281UK </p>
                    </div>
                </div>
                <div className={tiles.nameWrap}>
                    <div>
                        <Image className={tiles.amitprf}
                            src="/amit-logo.svg"
                            alt="amit logo"
                            width={18}
                            height={18}
                        />
                        <Image className={tiles.nehaprf}
                            src="/neha-logo.svg"
                            alt="neha logo"
                            width={18}
                            height={18}
                        />
                        <h2 className={tiles.name}> Amit & Neha </h2>
                    </div>
                    <p className={tiles.subDate}> Submitted on 14 Dec </p>
                </div>
                <div className={tiles.statusWrap}>
                    <h2 className={`${tiles.fcStatus} ${tiles.status}`}> FORM COMPLETED </h2>
                    <p className={tiles.statusDate}> As on 14 Dec, 3:35 PM </p>
                </div>
                <div className={`${tiles.openBTN} ${rotated? "openBTN" : "closeBTN"}`} onClick={() => {setDrop(!drop), setText(!text), setRotated(!rotated)}}>
                    <p className={tiles.btn}> {text? "Close" : "See details"} </p>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57833 8.08168C8.50065 8.00508 8.43897 7.91381 8.39687 7.81317C8.35477 7.71253 8.33309 7.60452 8.33309 7.49543C8.33309 7.38634 8.35477 7.27833 8.39687 7.17769C8.43897 7.07705 8.50065 6.98578 8.57833 6.90918C8.73585 6.75371 8.94826 6.66653 9.16958 6.66653C9.3909 6.66653 9.60332 6.75371 9.76083 6.90918L12.2317 9.35918C12.3168 9.44362 12.3844 9.5441 12.4306 9.6548C12.4767 9.76551 12.5004 9.88425 12.5004 10.0042C12.5004 10.1241 12.4767 10.2429 12.4306 10.3536C12.3844 10.4643 12.3168 10.5647 12.2317 10.6492L9.76917 13.0908C9.61161 13.2466 9.39902 13.3339 9.1775 13.3339C8.95598 13.3339 8.74339 13.2466 8.58583 13.0908C8.50815 13.0142 8.44647 12.923 8.40437 12.8223C8.36227 12.7217 8.34059 12.6137 8.34059 12.5046C8.34059 12.3955 8.36227 12.2875 8.40437 12.1869C8.44647 12.0862 8.50815 11.9949 8.58583 11.9183L10.5175 10.0042L8.57833 8.08168Z" fill="currentColor" />
                    </svg>
                </div>
            </section>

            <section className={`${tiles.dropdown} ${drop? "active" : "inactive"}`}>
                <hr />
                <div className={tiles.ddinfo}>
                    <div className={tiles.div1}>
                        <div className={tiles.viewApplication}>
                            <p className={tiles.vaText}> View Application </p>
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57833 8.08168C8.50065 8.00508 8.43897 7.91381 8.39687 7.81317C8.35477 7.71253 8.33309 7.60452 8.33309 7.49543C8.33309 7.38634 8.35477 7.27833 8.39687 7.17769C8.43897 7.07705 8.50065 6.98578 8.57833 6.90918C8.73585 6.75371 8.94826 6.66653 9.16958 6.66653C9.3909 6.66653 9.60332 6.75371 9.76083 6.90918L12.2317 9.35918C12.3168 9.44362 12.3844 9.5441 12.4306 9.6548C12.4767 9.76551 12.5004 9.88425 12.5004 10.0042C12.5004 10.1241 12.4767 10.2429 12.4306 10.3536C12.3844 10.4643 12.3168 10.5647 12.2317 10.6492L9.76917 13.0908C9.61161 13.2466 9.39902 13.3339 9.1775 13.3339C8.95598 13.3339 8.74339 13.2466 8.58583 13.0908C8.50815 13.0142 8.44647 12.923 8.40437 12.8223C8.36227 12.7217 8.34059 12.6137 8.34059 12.5046C8.34059 12.3955 8.36227 12.2875 8.40437 12.1869C8.44647 12.0862 8.50815 11.9949 8.58583 11.9183L10.5175 10.0042L8.57833 8.08168Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className={tiles.uploadDocs}>
                            <p className={tiles.udText}> Upload documents </p>
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57833 8.08168C8.50065 8.00508 8.43897 7.91381 8.39687 7.81317C8.35477 7.71253 8.33309 7.60452 8.33309 7.49543C8.33309 7.38634 8.35477 7.27833 8.39687 7.17769C8.43897 7.07705 8.50065 6.98578 8.57833 6.90918C8.73585 6.75371 8.94826 6.66653 9.16958 6.66653C9.3909 6.66653 9.60332 6.75371 9.76083 6.90918L12.2317 9.35918C12.3168 9.44362 12.3844 9.5441 12.4306 9.6548C12.4767 9.76551 12.5004 9.88425 12.5004 10.0042C12.5004 10.1241 12.4767 10.2429 12.4306 10.3536C12.3844 10.4643 12.3168 10.5647 12.2317 10.6492L9.76917 13.0908C9.61161 13.2466 9.39902 13.3339 9.1775 13.3339C8.95598 13.3339 8.74339 13.2466 8.58583 13.0908C8.50815 13.0142 8.44647 12.923 8.40437 12.8223C8.36227 12.7217 8.34059 12.6137 8.34059 12.5046C8.34059 12.3955 8.36227 12.2875 8.40437 12.1869C8.44647 12.0862 8.50815 11.9949 8.58583 11.9183L10.5175 10.0042L8.57833 8.08168Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <div className={tiles.div1}>
                        <div className={tiles.invoice}>
                            <Image className={tiles.download}
                                src="/download.svg"
                                alt="download icon"
                                height={11}
                                width={11}
                            />
                            <p className={tiles.inText}> Invoice </p>
                        </div>
                        <div className={tiles.needHelp}>
                            <Image
                                src="/whatsapp.svg"
                                alt="whatsapp icon"
                                height={20}
                                width={20}
                            />
                            <p className={tiles.helpText}> Need help? </p>
                        </div>
                    </div>
                </div>
                <hr className="innerhr" />
                <div className={tiles.mobileFlex}>
                    <div className={tiles.icons}>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81818 3.87878H17.4545C18.5256 3.87878 19.3939 4.74708 19.3939 5.81818V17.4545C19.3939 18.5256 18.5256 19.3939 17.4545 19.3939H5.81818C4.74708 19.3939 3.87878 18.5256 3.87878 17.4545V5.81818C3.87878 4.74708 4.74708 3.87878 5.81818 3.87878ZM7.75757 7.75757H15.5151C16.0507 7.75757 16.4848 8.19172 16.4848 8.72727C16.4848 9.26282 16.0507 9.69697 15.5151 9.69697H7.75757C7.22202 9.69697 6.78788 9.26282 6.78788 8.72727C6.78788 8.19172 7.22202 7.75757 7.75757 7.75757ZM15.5151 10.6667H7.75757C7.22202 10.6667 6.78788 11.1008 6.78788 11.6364C6.78788 12.1719 7.22202 12.6061 7.75757 12.6061H15.5151C16.0507 12.6061 16.4848 12.1719 16.4848 11.6364C16.4848 11.1008 16.0507 10.6667 15.5151 10.6667ZM7.75757 13.5758H10.6667C11.2022 13.5758 11.6364 14.0099 11.6364 14.5455C11.6364 15.081 11.2022 15.5151 10.6667 15.5151H7.75757C7.22202 15.5151 6.78788 15.081 6.78788 14.5455C6.78788 14.0099 7.22202 13.5758 7.75757 13.5758Z" fill="currentColor" />
                                <circle cx="18.9069" cy="18.9091" r="5.09091" fill="#E3FCEF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2706 18.9091C23.2706 21.3191 21.3169 23.2728 18.9069 23.2728C16.497 23.2728 14.5433 21.3191 14.5433 18.9091C14.5433 16.4992 16.497 14.5455 18.9069 14.5455C21.3169 14.5455 23.2706 16.4992 23.2706 18.9091ZM17.7647 18.5028C17.818 18.5257 17.8661 18.559 17.9064 18.6006L18.4706 19.1649L19.9075 17.7279C19.9478 17.6862 19.9959 17.653 20.0492 17.6301C20.1024 17.6073 20.1597 17.5952 20.2176 17.5947C20.2755 17.5942 20.333 17.6052 20.3866 17.6272C20.4403 17.6491 20.489 17.6815 20.5299 17.7225C20.5709 17.7635 20.6033 17.8122 20.6253 17.8658C20.6472 17.9194 20.6582 17.9769 20.6577 18.0348C20.6572 18.0928 20.6452 18.15 20.6223 18.2033C20.5995 18.2565 20.5662 18.3047 20.5245 18.3449L18.7791 20.0904C18.6973 20.1722 18.5863 20.2181 18.4706 20.2181C18.3549 20.2181 18.2439 20.1722 18.1621 20.0904L17.2893 19.2177C17.2477 19.1774 17.2144 19.1293 17.1915 19.076C17.1687 19.0228 17.1566 18.9655 17.1561 18.9076C17.1556 18.8496 17.1667 18.7922 17.1886 18.7385C17.2106 18.6849 17.243 18.6362 17.2839 18.5952C17.3249 18.5543 17.3736 18.5219 17.4273 18.4999C17.4809 18.478 17.5383 18.4669 17.5963 18.4674C17.6542 18.4679 17.7115 18.48 17.7647 18.5028Z" fill="currentColor" />
                            </svg>
                            <p> Form completed </p>
                        </div>
                        <hr className="pgBar greenBar" />
                        <div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35833 14.1667H12.6417C12.8383 13.6104 13.2252 13.1416 13.734 12.843C14.2428 12.5445 14.8408 12.4354 15.4223 12.5352C16.0038 12.6349 16.5313 12.937 16.9116 13.388C17.2918 13.8391 17.5004 14.41 17.5004 15C17.5004 15.59 17.2918 16.1609 16.9116 16.612C16.5313 17.063 16.0038 17.3651 15.4223 17.4648C14.8408 17.5646 14.2428 17.4555 13.734 17.157C13.2252 16.8584 12.8383 16.3896 12.6417 15.8333H7.35833C7.16174 16.3896 6.77483 16.8584 6.26599 17.157C5.75715 17.4555 5.15914 17.5646 4.57767 17.4648C3.9962 17.3651 3.46871 17.063 3.08843 16.612C2.70816 16.1609 2.49959 15.59 2.49959 15C2.49959 14.41 2.70816 13.8391 3.08843 13.388C3.46871 12.937 3.9962 12.6349 4.57767 12.5352C5.15914 12.4354 5.75715 12.5445 6.26599 12.843C6.77483 13.1416 7.16174 13.6104 7.35833 14.1667ZM2.49999 4.16667C2.49999 3.24583 3.24583 2.5 4.16166 2.5H14.1717C15.0892 2.5 15.8333 3.24 15.8333 4.16667C15.8333 5.0875 15.0875 5.83333 14.1717 5.83333H4.16166C3.94296 5.83355 3.72638 5.79056 3.52435 5.70682C3.32232 5.62308 3.13883 5.50024 2.98442 5.34537C2.83001 5.19049 2.70773 5.00663 2.62459 4.80435C2.54146 4.60207 2.49912 4.38536 2.49999 4.16667ZM6.66666 9.16667C6.66666 8.94759 6.70985 8.73065 6.79377 8.52828C6.87768 8.32591 7.00067 8.14207 7.1557 7.98727C7.31073 7.83247 7.49476 7.70976 7.69725 7.62615C7.89975 7.54254 8.11675 7.49967 8.33583 7.5H15.8308C16.2729 7.5 16.6968 7.67559 17.0093 7.98816C17.3219 8.30072 17.4975 8.72464 17.4975 9.16667C17.4975 9.60869 17.3219 10.0326 17.0093 10.3452C16.6968 10.6577 16.2729 10.8333 15.8308 10.8333H8.33583C8.11663 10.8341 7.89943 10.7915 7.69673 10.7081C7.49404 10.6246 7.30984 10.5019 7.15472 10.347C6.9996 10.1922 6.87663 10.0081 6.79287 9.80557C6.70911 9.603 6.66622 9.38587 6.66666 9.16667Z" fill="currentColor" />
                            </svg>
                            <p> Processing </p>
                        </div>
                        <hr className="pgBar" />
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4ZM10 8H8C7.44772 8 7 8.44771 7 9C7 9.55228 7.44772 10 8 10H10C10.5523 10 11 9.55228 11 9C11 8.44771 10.5523 8 10 8ZM8 11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11ZM16 11H14C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11ZM8 14H10C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16H8C7.44772 16 7 15.5523 7 15C7 14.4477 7.44772 14 8 14ZM16 14H14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14ZM14 8H16C16.5523 8 17 8.44771 17 9C17 9.55228 16.5523 10 16 10H14C13.4477 10 13 9.55228 13 9C13 8.44771 13.4477 8 14 8Z" fill="currentColor" />
                            </svg>
                            <p> Processed </p>
                        </div>
                        <hr className="pgBar" />
                        <div>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12.0558C8.5 11.6563 8.82441 11.3333 9.20833 11.3333H24.7917C25.1827 11.3333 25.5 11.6563 25.5 12.0558V24.7775C25.5 25.177 25.1756 25.5 24.7917 25.5H9.20833C9.11438 25.4991 9.02153 25.4797 8.93509 25.4428C8.84864 25.406 8.77029 25.3526 8.70452 25.2855C8.63874 25.2184 8.58683 25.139 8.55174 25.0518C8.51664 24.9647 8.49906 24.8715 8.5 24.7775V12.0558ZM11.3333 16.2987V17.7012C11.3333 18.1135 11.6535 18.4167 12.0487 18.4167H13.4512C13.5456 18.4182 13.6393 18.4007 13.7268 18.3653C13.8143 18.3299 13.8938 18.2773 13.9605 18.2105C14.0273 18.1438 14.0799 18.0643 14.1153 17.9768C14.1507 17.8893 14.1682 17.7956 14.1667 17.7012V16.2987C14.1682 16.2044 14.1507 16.1107 14.1153 16.0232C14.0799 15.9357 14.0273 15.8562 13.9605 15.7895C13.8938 15.7227 13.8143 15.6701 13.7268 15.6347C13.6393 15.5993 13.5456 15.5818 13.4512 15.5833H12.0487C11.9544 15.5818 11.8607 15.5993 11.7732 15.6347C11.6857 15.6701 11.6062 15.7227 11.5395 15.7895C11.4727 15.8562 11.4201 15.9357 11.3847 16.0232C11.3493 16.1107 11.3318 16.2044 11.3333 16.2987ZM15.5833 16.2987V17.7012C15.5833 18.1135 15.9035 18.4167 16.2987 18.4167H17.7012C17.7956 18.4182 17.8893 18.4007 17.9768 18.3653C18.0643 18.3299 18.1438 18.2773 18.2105 18.2105C18.2773 18.1438 18.3299 18.0643 18.3653 17.9768C18.4007 17.8893 18.4182 17.7956 18.4167 17.7012V16.2987C18.4182 16.2044 18.4007 16.1107 18.3653 16.0232C18.3299 15.9357 18.2773 15.8562 18.2105 15.7895C18.1438 15.7227 18.0643 15.6701 17.9768 15.6347C17.8893 15.5993 17.7956 15.5818 17.7012 15.5833H16.2987C16.2044 15.5818 16.1107 15.5993 16.0232 15.6347C15.9357 15.6701 15.8562 15.7227 15.7895 15.7895C15.7227 15.8562 15.6701 15.9357 15.6347 16.0232C15.5993 16.1107 15.5818 16.2044 15.5833 16.2987ZM11.3333 20.5487V21.9512C11.3333 22.3635 11.6535 22.6667 12.0487 22.6667H13.4512C13.5456 22.6682 13.6393 22.6507 13.7268 22.6153C13.8143 22.5799 13.8938 22.5273 13.9605 22.4605C14.0273 22.3938 14.0799 22.3143 14.1153 22.2268C14.1507 22.1393 14.1682 22.0456 14.1667 21.9512V20.5487C14.1682 20.4544 14.1507 20.3607 14.1153 20.2732C14.0799 20.1857 14.0273 20.1062 13.9605 20.0395C13.8938 19.9727 13.8143 19.9201 13.7268 19.8847C13.6393 19.8493 13.5456 19.8318 13.4512 19.8333H12.0487C11.9544 19.8318 11.8607 19.8493 11.7732 19.8847C11.6857 19.9201 11.6062 19.9727 11.5395 20.0395C11.4727 20.1062 11.4201 20.1857 11.3847 20.2732C11.3493 20.3607 11.3318 20.4544 11.3333 20.5487ZM10.625 11.3333V12.75H14.875V11.3333H10.625ZM19.125 11.3333V12.75H23.375V11.3333H19.125ZM19.8333 9.21542C19.8333 8.82017 20.1365 8.5 20.5487 8.5H21.9512C22.3465 8.5 22.6667 8.80317 22.6667 9.21542V11.3333H19.8333V9.21542ZM11.3333 9.21542C11.3333 8.82017 11.6365 8.5 12.0487 8.5H13.4512C13.8465 8.5 14.1667 8.80317 14.1667 9.21542V11.3333H11.3333V9.21542Z" fill="currentColor" />
                            </svg>
                            <p> Appointment booking </p>
                        </div>
                        <hr className="pgBar" />
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.009 6H8V10H6V12H8V13H6V15H8V21H5.009C3.9 21 3 20.04 3 18.85V8.15C3 6.962 3.902 6 5.009 6Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.009 3C9.902 3 9 3.893 9 4.995V21H18.991C19.5218 21.0013 20.0315 20.792 20.4081 20.418C20.7847 20.044 20.9976 19.5358 21 19.005V4.995C21 3.893 20.101 3 18.991 3H11.009ZM14 7H12V9H14V7ZM14 10H12V12H14V10ZM14 13H12V15H14V13ZM16 16H14V19H16V16ZM18 7H16V9H18V7ZM18 10H16V12H18V10ZM18 13H16V15H18V13Z" fill="currentColor" />
                            </svg>
                            <p> At embassy/ VFS </p>
                        </div>
                        <hr className="pgBar" />
                        <div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 9.99999 1.66666C14.6024 1.66666 18.3333 5.39762 18.3333 9.99999ZM12.357 5.96663C12.7921 6.39953 13.0984 6.94482 13.2417 7.54165C13.4353 8.34001 13.3265 9.18178 12.9362 9.90468C12.546 10.6276 11.902 11.1804 11.1283 11.4567C10.9575 11.5175 10.8367 11.6692 10.8367 11.85V12.5017C10.8367 12.7231 10.7487 12.9355 10.5921 13.0921C10.4355 13.2487 10.2231 13.3367 10.0017 13.3367C9.7802 13.3367 9.56782 13.2487 9.41122 13.0921C9.25463 12.9355 9.16666 12.7231 9.16666 12.5017V10.8233C9.16951 10.6042 9.25856 10.395 9.41453 10.2411C9.57047 10.0871 9.78075 10.0008 9.99985 10.0008H9.99416C10.915 10.0008 11.6633 9.25249 11.6633 8.33415C11.6534 7.89781 11.473 7.48271 11.1608 7.17771C10.8486 6.87272 10.4294 6.70206 9.99292 6.70228C9.55647 6.7025 9.13745 6.87357 8.82555 7.17888C8.51366 7.48419 8.33369 7.89947 8.32416 8.33582C8.32249 8.79498 7.94916 9.16748 7.48916 9.16748C7.28348 9.16622 7.08567 9.08833 6.93434 8.94903C6.78302 8.80973 6.68907 8.61902 6.67082 8.41415L6.66666 8.29165C6.68082 6.20498 8.60082 4.59498 10.7775 5.08998C11.375 5.23022 11.9219 5.53372 12.357 5.96663ZM10.8333 15C10.8333 15.4602 10.4602 15.8333 9.99999 15.8333C9.53975 15.8333 9.16666 15.4602 9.16666 15C9.16666 14.5397 9.53975 14.1667 9.99999 14.1667C10.4602 14.1667 10.8333 14.5397 10.8333 15Z" fill="currentColor" />
                            </svg>
                            <p> Approval/ Rejection </p>
                        </div>
                    </div>
                </div>
                <div className={tiles.indication}>
                    <p className={tiles.indInfo}> Your form is filled. Its is further being sent to our embassy for processing. We may reach out to you if we have any questions.  </p>
                    <hr />
                    <div>
                        <Image className={tiles.clock}
                            src="clock.svg"
                            alt="clog image"
                            height={24}
                            width={24}
                        />
                        <p className={tiles.inddate}> Estimated visa arrival date: 29 Jan 2023 </p>
                    </div>
                </div>
                <div className={tiles.updates}>
                    <Image
                        src="toggle.svg"
                        alt="Status toggle"
                        height={16}
                        width={32}
                    />
                    <p className={tiles.upText}> Send status updates on Whatsapp (+91 8800726381) </p>
                </div>
                <hr className="innerhr" />
                <div className={tiles.amitDetails}>
                    <div>
                        <div className={`${tiles.details} ${tiles.details1}`}>
                            <Image
                                src="amit-logo.svg"
                                alt="amit logo"
                                height={18}
                                width={18}
                            />
                            <p className={tiles.name}> Amit Patel </p>
                        </div>
                        <div className={tiles.details}>
                            <Image
                                src="neha-logo.svg"
                                alt="neha logo"
                                height={18}
                                width={18}
                            />
                            <p className={tiles.name}> Nega Gupta </p>
                        </div>
                    </div>
                    <div>
                        <p className={`${tiles.age} ${tiles.details1}`}> 27 yrs </p>
                        <p className={tiles.age}> 26 yrs </p>
                    </div>
                    <div>
                        <p className={`${tiles.email} ${tiles.details1}`}> amitpatel@gmail.com </p>
                        <p className={tiles.email}> nehagupta@gmail.com </p>
                    </div>
                    <div>
                        <h2 className={`${tiles.fcStatus} ${tiles.status} ${tiles.state}`}> FORM COMPLETED </h2>
                        <h2 className={`${tiles.fcStatus} ${tiles.status}`}> FORM COMPLETED </h2>
                    </div>
                    <div>
                        <p className={`${tiles.phone} ${tiles.details1}`}> 8800726382 </p>
                        <p className={tiles.phone}> 8563924729 </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormCompleted