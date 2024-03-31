//modules
import React, { useState } from 'react'
import fakeNotificationsData from '../data/notificationsData.json'
//components
import Icon from 'react-inlinesvg'
//svg
import moreSvg from '../assets/svg/more.svg'
import growthSvg from '../assets/svg/growth.svg'
import securitySvg from '../assets/svg/security-shield.svg'
import handMikeSvg from '../assets/svg/hand-mike.svg'
//css
import '../assets/css/notifications.css'
function Notifications() {
  const [notificationsData, setNotificationsData] = useState(fakeNotificationsData)

  return (
    <section className="notifications-section flex-cm center">
      {
        Object.keys(notificationsData).map((key, groupIndex) => {
          return (
            <div className="group flex-cm center" key={groupIndex}>
              <b className="date">{key}</b>
              <div className="notifications-wrapper flex-cm center">
                {
                  notificationsData[key].map(({ title, description, type, links }, index) => {
                 return(
                    <div className={`notification ${type} flex-rw `} key={index}>
                      <div className="icon-wrapper">
                        <div className="svgCont">
                          {type === 'progress' && <Icon src={growthSvg} />}
                          {type === 'security' && <Icon src={securitySvg} />}
                          {type === 'announcement' && <Icon src={handMikeSvg} />}
                        </div>
                      </div>
                      <div className="message-wrapper flex-cm">
                        <b className="title">{title}</b>
                        <small className="description">{description}</small>
                        <div className="links-wrapper flex-rw">
                          {links.map(({ title, url }, index) => {
                            return (
                              <a href={url} className="link button" key={index}>{title}</a>
                            )
                          })}
                        </div>
                      </div>
                      <div className="more svgCont">
                        <Icon src={moreSvg} /> 
                      </div> 
                      <div className="more-options-wrapper">
                        <span className="option">Mark as read</span>
                        <span className="option">Remove this notification</span>
                        <span className="option">Turn of these notifications</span>
                      </div>
                    </div>
                 )
                  })

                }
              </div>
            </div>
          )
        })


      }
    </section>
  )
}

export default Notifications
