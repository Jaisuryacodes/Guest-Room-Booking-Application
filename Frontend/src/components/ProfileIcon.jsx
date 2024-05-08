import React, { useContext, useState } from 'react'
import avatorIcon from '../assets/UseravatarIcon.png'
import MenuIcon from '../assets/MenuIcon.png'
import { UserContext } from './Usercontexr'
const ProfileIcon = () => {
    const [menucard,setmenucard] = useState(false)
    function menufn()
    {
      setmenucard(previous=>!previous)
    }
  const{ User}= useContext(UserContext);
  return (
    <div onClick={menufn} >
      <div className=" flex flex-col ">
     <div className="bg-[#f5f7f6] flex p-2 gap-2 rounded-full">
     <img className='w-[30px]' src={avatorIcon} />
      <img className='w-[30px]' src={MenuIcon}  />
      {
      <div>{ User.name}</div>
    }
     </div>
      {
        menucard? ( <div className=" px-5 absolute top-16 bg-[#3662b5] rounded-md text-black">
             <h2>Logout</h2>

             </div>

        ) : <h3></h3>
      }
      </div>
    </div>
  )
}

export default ProfileIcon
