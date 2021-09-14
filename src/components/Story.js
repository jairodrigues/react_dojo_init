
const Story = (props) => (
	<div className="story">
		<div className="container">
			<div className="img-border">
				<img src={props.logo} className="img-logo"/>
			</div>
			<p>{props.nome}</p>
		</div>				
	</div>
)


export default Story;