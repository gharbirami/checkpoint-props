import React from 'react'
import propTypes from 'prop-types'
const Profile = props =>{
    const {fullName,bio,profession,children,handleName}= props
    const styleObject = {color:"green"};
    return (
        <div style ={styleObject}>
            <h1>I'm {fullName}</h1>
            <h2>{bio}</h2>
            <h3>And I'm a {profession}</h3>
            {children}
            <br />
        <button onClick={() => handleName(`The user is Rami`)}>
        Who is the user?
        </button>
        </div>
)
}
Profile.defaultProps = {
    fullName:"Gharbi Rami",
    profession:"this is the default value",
    bio:"Tunisie Telecom",
}
Profile.propTypes = {
    fullName : propTypes.string,
    bio : propTypes.string,
    profession: propTypes.string
}
export default Profile;
