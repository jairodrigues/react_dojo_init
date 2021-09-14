
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../img/animated.json'

import { ReactComponent as ActivityIcon } from '../icons/activity.svg';
import { ReactComponent as ActivityClickIcon } from '../icons/activity-click.svg';
import { ReactComponent as SendIcon } from '../icons/send.svg';
import { ReactComponent as Share } from '../icons/share.svg';
import { ReactComponent as Message } from '../icons/message.svg';
import { ReactComponent as Remider } from '../icons/remider.svg';


const TimeLine = ({ profile_image, profile_name, image, description, children }) => {
	const [like, setLike] = useState(false);
	const [animationState, setAnimationState] = useState({
		isStopped: false, isPaused: false, show: false
	});

	useEffect(() => {
		console.log('você clickou')
	});

	const defaultOptions = {
		loop: false,
		autoplay: true, 
		animationData: animationData,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}
	};
 	  
	return (
		<div className="timeline">
			<div className="header">
				<div className="profile-content">
					<img src={profile_image} className="image-profile"/>
					<p><b>{profile_name}</b></p>
				</div>
				<Share className="profile-share"/>
			</div>		
			{ animationState.show && like &&<Lottie 
			  options={defaultOptions}
              height={400}
              width={400}
			  direction={animationState.duraction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
			  style={{ position: 'absolute', marginLeft: '100px', marginTop: '50px', opacity: 0.3 }}
			  eventListeners={[
				{
				  eventName: 'complete',
				  callback: () => setAnimationState({ ...animationState, show: false}),
				},
			  ]}
			/>}	
			<img src={image} onClick={() => {
				setAnimationState({
					...animationState,
					isStopped: !animationState.isStopped,
					show: true
				})
				setLike(!like)
			}}/>
			<div className="btn-options">
				<div className="icons">
					{like ? <ActivityClickIcon /> : <ActivityIcon />}
					<Message className="icon"/>
					<SendIcon className="icon"/>
				</div>	
				<Remider className="icons"/>					
			</div>
			<div className="description">
				<img src={profile_image}/>
				<p>Curtido por <b>{profile_name}</b> e o <b>outras {like ? 1 : 0} pessoas</b></p>							
				<p><b>{profile_name}</b>{description}</p>
			</div>
			{children}
		</div>
	);
  }

  export default TimeLine;