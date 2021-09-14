import Logo from '../img/logo.png';

export default function Header(props){
	return (
		<header>
			<div className="logo"><img src={Logo} className="img-logo"/></div>
			<div className="search"><span>Pesquisar</span></div>
			<div className="menu"> 
				{props.children}
			</div>
		</header>
	)
}