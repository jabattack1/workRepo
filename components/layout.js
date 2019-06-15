import Head from 'next/head';


const Layout = (props) => (
	<div>
	<Head>
		<title>Work Orders</title>
		<link rel='stylesheet' href='https://bootswatch.com/4/cerulean/bootstrap.min.css'></link>
		<link rel='icon' type='image/png' href='https://i.imgur.com/vKjw2ER.png' />
	</Head>
		<div className='container'>
			<div id='banner'>
				<img id='logo' src="https://i.imgur.com/7FR4mN4.png" />
			</div>
			{props.children}
		</div>
	</div>
);

export default Layout;
