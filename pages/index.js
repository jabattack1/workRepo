import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';

import Parent from '../components/parent';

import parsedData from '../data/work.js';


class Index extends React.Component {

	componentDidMount() {
		this.data = parsedData;
	}

 	render () {
    	return(
			<Layout>
				<div>
					<Parent data={parsedData}/>
				</div>
			</Layout>
    	)
 	 }
}

export default Index;
