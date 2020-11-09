import React from 'react'
import Channel from '../componets/Channel'
import "../componets/Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h5>FOLLOWED CHANNELS</h5>
            <Channel avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Diamond&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=DarkBrown"
            name='cleverprogrammer'
            followers='820k' />
            <Channel avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Diamond&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=DarkBrown"
            name='cleverprogrammer'
            followers='820k' />
            <h5>RECOMMENDED CHANNELS</h5>
            <Channel avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Diamond&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=DarkBrown"
            name='cleverprogrammer'
            followers='820k' />
            <p className='sidebar__topShowMore'>Show More</p>
            
        </div>
    )
}

export default Sidebar
