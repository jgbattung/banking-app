import classes from './BankFeatures.module.css';

function BankFeatures (props) {
	function clickHandler () {
		alert(props.text);
	}

	return (
		<div className={classes.features} onClick={clickHandler}>
			<h3>{props.text}</h3>
		</div>
	);
}

export default BankFeatures;
