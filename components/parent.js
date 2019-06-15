import '../css/grid.css';
import '../css/gridData.css';
import '../css/style.css';

import WorkOrders from '../components/work-orders';

import parsedWorkers from '../data/worker.js';

class Parent extends React.Component{

	constructor(props) {
		super(props);
		var array = this.props.data.orders;
		array.sort(function(a,b){
			return a.deadline - b.deadline;
		});
		var orders = array;

       	this.state = {
 			data:orders
       	}

    }



	state = {
		data: this.props.data.orders
	}

	render(){

		return(
			<div>
				<label class="switch">
					<p id='early'>TOGGLE DATE</p>
					<input id='sortByDate' type="checkbox" onChange={this.toggle.bind(this)}/>
		  			<span class="slider round"></span>
				</label>
				<label>
					<input type='text' id='searchField' placeHolder='Filter by name...'/>
				</label>
				<div className='grid'>
					{this.state.data.map((wo, i) => <WorkOrders {...this.state.data} key={i} i={i} wo={wo} />)}
				</div>
			</div>
		)
	}

	toggle(){

		if (typeof window !== 'undefined') {
			var c = document.getElementById('sortByDate');
			var array = this.props.data.orders;
			if(c.checked){
				array.sort(function(a,b){
					return b.deadline - a.deadline;
				});
				var orders = array;
				this.setState({data:orders});
			}
			else{
				array.sort(function(a,b){
					return a.deadline - b.deadline;
				});
				var orders = array;
				this.setState({data:orders});
			}
		}
	}

	componentDidMount(){

		var input = document.getElementById("searchField");
		var stable= this;
		input.addEventListener("keyup", function(event) {
			if(input.value===''){
				var orig = stable.props.data.orders;
				stable.setState({data:orig});
			}
			else{
				if (event.keyCode === 13) {
					event.preventDefault();
					var result = parsedWorkers.worker.filter(obj => {
					  return obj.name.toLowerCase() === input.value.toLowerCase();
					})

					if(result.length > 0){
						var id = result[0].id;
						var filterResult = stable.state.data.filter(obj => {
						  return obj.workerId === id;
						})
						stable.setState({data:filterResult});
					}
				}
			}
		});
		console.log(this.state);
	}


}

export default Parent;

