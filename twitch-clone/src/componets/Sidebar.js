import React from 'react'
import Channel from '../componets/Channel'
import "../componets/Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar__top'>
            <h5>FOLLOWED CHANNELS</h5>
            <Channel avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Diamond&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=DarkBrown"
            name='thePROZACH-1'
            followers='25k' />
            <Channel avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Diamond&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=DarkBrown"
            name='thePROZACH-2'
            followers='2k' />
            <h5>RECOMMENDED CHANNELS</h5>
            <Channel avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Diamond&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=DarkBrown"
            name='thePROZAHC-3'
            followers='250k' />
            <p className='sidebar__topShowMore'>Show More</p>
            </div>
            <div className='sidebar__bottom'>
                <div className='sidebar__bottomContainer'>
                    <i className="fas fa-search"></i>
                    <input type='text' placeholder="Search to add Friends"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
