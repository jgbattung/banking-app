import classes from './Modals.module.css';

function WithdrawModal (props) {
	function cancelHandler () {
		props.onCancel();
	}

	return (
		<div className={classes.modal}>
			<form>
				<h3 className={classes.prompt}>Please enter your withdrawal amount</h3>
				<div className={classes.control}>
					<input type="number" required placeholder="Enter witdrawal amount" />
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

export default WithdrawModal;
