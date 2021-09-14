import { Component } from "react";

import LogoAura from './img/logo-aura.png';

import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as ExplorerIcon } from './icons/explorer.svg';
import { ReactComponent as ActivityIcon } from './icons/activity.svg';
import { ReactComponent as SendIcon } from './icons/send.svg';

import Header from './components/Header';
import Story from './components/Story';
import TimeLine from './components/TimeLine';
import Comments from './components/Coments';

export default class App extends Component {

	constructor(){
		super()
		this.state = {
			timeline: []
		}
	}

	async componentDidMount() {
		const response = await fetch('http://localhost:3003/timeline', { method: 'GET' })
		const timeline = await response.json();
		this.setState({ timeline })
	}

	render() {
		return (
			<>
			<Header>
				<HomeIcon />
				<SendIcon className="icon" />
				<ExplorerIcon className="icon"/>
				<ActivityIcon className="icon"/>
			</Header>
			<main>
				<section>
					<Story image={LogoAura} name={'aura'} timeline={this.state.timeline} />
					{  this.state.timeline.map(elm =>
						<TimeLine 
							profile_image={elm.profile} 
							profile_name={elm.name} 
							image={elm.image}
							description={elm.description}
						>
							<Comments/>
						</TimeLine>
					)}
					
				</section>
			</main>
		</>
		)
	}
}