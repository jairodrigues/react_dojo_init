import React from 'react';
import ReactDOM from 'react-dom';

import LogoAura from './img/logo-aura.png';

import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as ExplorerIcon } from './icons/explorer.svg';
import { ReactComponent as ActivityIcon } from './icons/activity.svg';
import { ReactComponent as SendIcon } from './icons/send.svg';
import { ReactComponent as Share } from './icons/share.svg';
import { ReactComponent as Message } from './icons/message.svg';
import { ReactComponent as Remider } from './icons/remider.svg';
import { ReactComponent as Comments } from './icons/comments.svg';

import Header from './components/Header';
import Story from './components/Story';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
	  	<Header>
		  	<HomeIcon />
			<SendIcon className="icon" />
			<ExplorerIcon className="icon"/>
			<ActivityIcon className="icon"/>
		</Header>

		<main>
			<section>
				<Story logo={LogoAura} nome={'Luiza'} />
				{/* <div className="timeline">
					<div className="header">
						<div className="profile-content">
							<img src={LogoAura} className="image-profile"/>
							<p><b>aura</b></p>
						</div>
						<Share className="profile-share"/>
					</div>					
					<img src="https://news.microsoft.com/wp-content/uploads/prod/sites/42/2020/01/aura-5e163ce6ed84a.jpg"/>
					<div className="btn-options">
						<div className="icons">
							<ActivityIcon />
							<Message className="icon"/>
							<SendIcon className="icon"/>
						</div>	
						<Remider className="icons"/>					
					</div>
					<div className="description">
						<img src={LogoAura} />
						<p>Curtido por <b>aura</b> e o <b>outras 2.1231 pessoas</b></p>							
						<p><b>aura</b> 🎬 Olá eu sou a aura a inteligência artificial</p>
					</div>
					<div className="comments">
						<div className="content">
							<Comments />
							<p>Adicione um comentário...</p>
						</div>						
						<a href="#">Publicar</a>
					</div>
				</div> */}
			</section>
		</main>
  </React.StrictMode>,
  document.getElementById('root')
);

