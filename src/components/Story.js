
import React from 'react';

export default function Story(props) {
	return (
		<div className="story">
			<div className="container">
				{ props.timeline.map(elm => 
					<>
						<div className="img-border">
							<img src={elm.profile} className="img-logo"/>
							<br />
							<p>{elm.name}</p>
						</div>
					</>
				)}			
			</div>				
		</div>
	);
  }