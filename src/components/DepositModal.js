import classes from './Modals.module.css';

function DepositModal (props) {
	function cancelHandler () {
		props.onCancel();
	}

	return (
		<div className={classes.modal}>
			<form>
				<h3 className={classes.prompt}>Please enter your deposit amount</h3>
				<div className={classes.control}>
					<input type="number" required placeholder="Enter deposit amount" />
				</div>
			</form>
			<div>
				<input className={classes.actions} type="submit" value="Confirm" />
				<button className={classes.actions} onClick={cancelHandler}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default DepositModal;
