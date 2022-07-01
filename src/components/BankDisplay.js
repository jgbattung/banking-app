import { useState } from 'react';
import classes from './BankDisplay.module.css';
import BankFeatures from './BankFeatures';
import DepositModal from './DepositModal';
import Logo from './Logo';
import TransferModal from './TransferModal';
import Card from './ui/Card';
import Flex from './ui/Flex';
import MainCard from './ui/MainCard';
import WithdrawModal from './WithdrawModal';

function BankDisplay (props) {
	const [ balance, setBalance ] = useState(0);
	const [ depositModalIsActive, setDepositModalIsActive ] = useState(false);
	const [ withdrawModalIsActive, setWithdrawModalIsActive ] = useState(false);
	const [ transferModalIsActive, setTransferModalIsActive ] = useState(false);

	function depositHandler () {
		setDepositModalIsActive(true);
	}

	function withdrawHandler () {
		setWithdrawModalIsActive(true);
	}

	function transferHandler () {
		setTransferModalIsActive(true);
	}

	function closeModalHandler () {
		setTransferModalIsActive(false);
		setWithdrawModalIsActive(false);
		setDepositModalIsActive(false);
	}

	return (
		<div>
			<MainCard>
				<h4 className={classes.balanceStyle}>
					<span>₱</span>
					{balance}
				</h4>
				<h5 className={classes.account}>Savings Account | 1234 567 89</h5>
			</MainCard>

			<div className={classes.container}>
				<Flex>
					<Card>
						<div className={classes.features} onClick={depositHandler}>
							<h3>Deposit</h3>
						</div>
					</Card>
					<Card>
						<div className={classes.features} onClick={withdrawHandler}>
							<h3>Withdraw</h3>
						</div>
					</Card>
					<Card>
						<div className={classes.features} onClick={transferHandler}>
							<h3>Transfer</h3>
						</div>
					</Card>
				</Flex>
			</div>

			{depositModalIsActive && <DepositModal onCancel={closeModalHandler} />}
			{withdrawModalIsActive && <WithdrawModal onCancel={closeModalHandler} />}
			{transferModalIsActive && <TransferModal onCancel={closeModalHandler} />}
		</div>
	);
}

export default BankDisplay;
