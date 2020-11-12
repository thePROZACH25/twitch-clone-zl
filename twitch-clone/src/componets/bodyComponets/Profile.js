import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__topLeft'> 
                <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Diamond&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=DarkBrown" 
                alt='avatar' />

                <div className='profile__topLeftDetails'>
                    <h1>thePROZACH</h1>
                    <h3>2.5k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className='fas fa-heart graybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>
            <div className='profile__menu'>
                <h2 className='active' >Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className='fas fa-arrow-up'></i></h2>
                <h2>Chat</h2>
            </div>
            <div className='profile__recent'>
                <h2>Recent Broadcasts</h2>
                <div className='profile__recentItems'>
                    <RecentItem
                    url={"https://www.youtube.com/embed/8CUQkw2aMRU"}
                    title={'Mobile Suit Gundam F91（EN,TW,HK,KR sub'}
                    />
                    <RecentItem
                    url={"https://www.youtube.com/embed/8CUQkw2aMRU"}
                    title={'Mobile Suit Gundam F91（EN,TW,HK,KR sub'}
                    />
                    <RecentItem
                    url={"https://www.youtube.com/embed/8CUQkw2aMRU"}
                    title={'Mobile Suit Gundam F91（EN,TW,HK,KR sub'}
                    />
                    <RecentItem
                    url={"https://www.youtube.com/embed/8CUQkw2aMRU"}
                    title={'Mobile Suit Gundam F91（EN,TW,HK,KR sub'}
                    />
                </div>
                <div className='profile__categories'>
                        <h2>thePROZACH's recently streamd Categories</h2>
                        <img src=" "/>
                        <h3>Science & Technology</h3>

                </div>

            </div>
        </div>
    )
}

export default Profile
