import React from 'react'

function ProfilePic({ label, shortName = false }) {
  if (label && shortName) {
    return <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white">{label}</div>
  }
  return <>ProfilePic goes here.</>
}

export default ProfilePic
