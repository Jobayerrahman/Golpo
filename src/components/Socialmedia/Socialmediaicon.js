import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faTwitterSquare, faYoutubeSquare, faFacebookSquare, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
export default function Socialmediaicon(){
    return(
        <div className="icon-wrapper">
            <FontAwesomeIcon className="icon icon-facebook" icon={faFacebookSquare} />
            <FontAwesomeIcon className="icon icon-youtube" icon={faYoutubeSquare} />
            <FontAwesomeIcon className="icon icon-twitter" icon={faTwitterSquare} />
            <FontAwesomeIcon className="icon icon-drive" icon={faGoogleDrive} />
        </div>
    )
}