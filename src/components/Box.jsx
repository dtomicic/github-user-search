import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineLink, AiOutlineTwitter } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";




const Box = ({user, hidden, setHidden}) => {
    if(user.length === 0 || user.message === 'Not Found') {
        setHidden('hidden'); 
      }
      else {
        setHidden('shown');
      }

  return (
    <div className='box'>
        <div className={`noUserFound ${ hidden === 'hidden' ? "shown" : "hidden" }`}>
            <h3 className="noUser">No user has been found.</h3>
        </div>
        <div className={`box__textArea ${ hidden === 'hidden' ? "hidden" : "shown" }`}>
            <div className="box__header">
                <div className="box__headerImage">
                    <img src={`${user.avatar_url}`} alt="" className='box__headerImageItem' />
                </div>

                <div className="box__headerText">
                    <div className="box__headerName">
                        <h3 className="box__headerNameMain">{user.name}</h3>
                        <h3 className="box__headerNameSecondary">@{user.login}</h3>
                    </div>
                </div>
            </div>

            <div className="box__bio">
                <p className="box__bioText">{user.bio === null ? "User has no bio" : user.bio}</p>
            </div>

            <div className="box__info">
                <div className="box__infoItem">
                    <h3 className="box__infoItemHeader">Repos</h3>
                    <h3 className="box__infoItemSubHeader">{user.public_repos}</h3>
                </div>
                <div className="box__infoItem">
                    <h3 className="box__infoItemHeader">Followers</h3>
                    <h3 className="box__infoItemSubHeader">{user.followers}</h3>
                </div>
                <div className="box__infoItem">
                    <h3 className="box__infoItemHeader">Following</h3>
                    <h3 className="box__infoItemSubHeader">{user.following}</h3>
                </div>
            </div>

            <div className="box__details">
                <div className="box__detailsFirst">
                    <div className={`box__detailsItem ${ user.location === null ? "notAvailable" : "available" }`}>
                        <IoLocationSharp className="box__detailsFirstIcon" /> 
                        <h3 className="box__detailsFirstText">{user.location === null ? 'Not Available' : user.location}</h3>
                    </div>
                    <div className={`box__detailsItem ${ user.blog === "" ? "notAvailable" : "available" }`}>
                        <AiOutlineLink className="box__detailsFirstIcon" /> 
                        <h3 className="box__detailsFirstText">{user.blog === "" ? 'Not Available' : user.blog}</h3>
                    </div>
                </div>
                <div className="box__detailsSecond">
                    <div className={`box__detailsItem ${ user.twitter_username === null ? "notAvailable" : "available" }`}>
                        <AiOutlineTwitter className="box__detailsFirstIcon" /> 
                        <h3 className="box__detailsFirstText">{user.twitter_username === null ? 'Not Available' : user.twitter_username}</h3>
                    </div>
                    <div className={`box__detailsItem ${ user.company === null ? "notAvailable" : "available" }`}>
                        <BsBuilding className="box__detailsFirstIcon" /> 
                        <h3 className="box__detailsFirstText">{user.company === null ? 'Not Available' : user.company}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Box