import classes from './Modals.module.css';

function TransferModal (props) {
	function cancelHandler () {
		props.onCancel();
	}

	return (
		<div className={classes.modal}>
			<form>
				<h3 className={classes.prompt}>Please enter your transfer amount and the account number you want to transfer to</h3>
				<div className={classes.control}>
					<input type="text" required placeholder="Account number" />
				</div>
				<div className={classes.control}>
					<input type="number" required placeholder="Transfer amount" />
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

export default TransferModal;
