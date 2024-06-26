//modules
import React ,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import useActiveClassName from '../../hooks/useActiveClassName'
//components
import UserAvatar from '../../components/UserAvatar'
import Icon from 'react-inlinesvg'
//svg
import cameraSvg from '../../assets/svg/camera.svg'
import externalLinkSvg from '../../assets/svg/external-link.svg'
import profileSvg from '../../assets/svg/profile.svg'
import settingsSvg from '../../assets/svg/settings.svg'
import notificationSvg from '../../assets/svg/notification.svg'
import securityShieldSvg from '../../assets/svg/security-shield.svg'
import hamburgerSvg from '../../assets/svg/hamburger.svg'
import dropDownSvg from '../../assets/svg/drop-down.svg'
//css
import '../../assets/css/settings.css'
import '../../assets/css/mobile-large/settings.css'
import '../../assets/css/laptop/settings.css'
function Settings() {
  const {pathname} = useLocation()
  const {avatar,name,username,status,level} = useSelector(state=>state.userSlice)
  const headerTitles = {
    '/settings': 'Basic info',
    '/settings/': 'Basic info',
    '/settings/account': 'Account',
    '/settings/privacy': 'Privacy',
    '/settings/notifications': 'Notifications',
  }
  const [isContentActive, setIsContentActive] = useState(true)

 const [currentAvatar, setCurrentAvatar] = useState(avatar)
const editButtonClickHandler = ({currentTarget}) => {
   const valueWrapper = currentTarget.previousElementSibling
    valueWrapper.classList.add('editable')
    valueWrapper.querySelector('.value-field').focus() 
 }
 const updateUserAvatar = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
 reader.onload = () => {
    setCurrentAvatar(reader.result)
 }
}
  return (
    <section className='settings-section'>
      <div className="header flex-rw center">
        <div className="background"></div>

        <div className="user-primary-info-wrapper center">   
         <label  className="user-avatar-label">
         <UserAvatar avatar={currentAvatar} status={status} level={level} />
          <Icon src={cameraSvg} />
          <input type="file" hidden={true} onChange={updateUserAvatar}/>
          </label>      
          <div className="text-wrapper flex-cm">
          <p className="name flex-rw">
            <span>{name}</span>
            <Link to={`/profile/${username}`} className="svgCont flex-rw center">
              <Icon src={externalLinkSvg} />
            </Link>
            </p>
          <small className="username">@{username}</small>
          </div>
        </div>
      </div>
     <div className="main-content flex-rw">
      <div className="navigation-buttons-wrapper flex-cm ">
        <NavLink to='/settings' end={true} className={(state)=>useActiveClassName(state,'button')} onClick={()=>setIsContentActive(true)} >
          <Icon src={profileSvg} />
          Basic info
          </NavLink>
        <NavLink to='account' className={(state)=>useActiveClassName(state,'button')} onClick={()=>setIsContentActive(true)}>
          <Icon src={settingsSvg} />
          Account
          </NavLink>
        <NavLink to='privacy' className={(state)=>useActiveClassName(state,'button')} onClick={()=>setIsContentActive(true)}>
          <Icon src={securityShieldSvg} />
          Privacy
          </NavLink>
        <NavLink to='notifications' className={(state)=>useActiveClassName(state,'button')} onClick={()=>setIsContentActive(true)} datalarge='true'>
          <Icon src={notificationSvg} />
          Notifications
          </NavLink>
    </div>
    <div className={`content ${isContentActive ? 'active' : ''}`}>
       <button className="content-show-button flex-rw center" onClick={()=>setIsContentActive(true)}>
         <Icon src={dropDownSvg} />
       </button>
       <div className="header flex-rw">
          <button className="hamburger button svgCont" onClick={()=>setIsContentActive(false)}>
            <Icon src={hamburgerSvg} />
          </button>
          <div className="drop-down-icon svgCont">
            <Icon src={dropDownSvg} />
          </div>
          <h2 className="heading">{headerTitles[pathname]}</h2>
       </div>
       <div className="outlet-wrapper">
        <Outlet context={[editButtonClickHandler]}/>
       </div>
    </div>    
    </div> 

    </section>
  )
}

export default Settings
