import '../css/grid.css';
import '../css/gridData.css';
import '../css/style.css';

import parsedWorkers from '../data/worker.js';

class WorkOrders extends React.Component{

	constructor(){
	    super()
	   
	    this.state = {

	    }
	}

	state = {
		
	}

	render(){
		let select = '';
		const worker = this.props.wo.workerId;

		var xmlhttp = eval(parsedWorkers);

		var workerExtract = xmlhttp.worker;
		var result = workerExtract .filter(obj => {
		  return obj.id === worker;
		})

		
		select=
			<div className='grid-figure-wrap'>
				<h2 className='workHeading'>{this.props.wo.name}</h2>
				<p className='workDescription'>{this.props.wo.description}</p>
				<div className='workerWrap'>
					<p className='workerName'>{result[0].name}</p>
					<p className='workerEmail'>{result[0].email}</p>
					<p className='workerCompany'>{result[0].companyName}</p>
					<p className='workerId'>WORKER ID:{this.props.wo.workerId}</p>
					<img className='workerPhoto' src={result[0].image} />
				</div>
				<p className='workDeadLine'>{this.props.wo.deadline}</p>
			</div>



		return(
			<figure  className='grid-figure'>
			{select}
			</figure>
		)
	}



}

export default WorkOrders;



