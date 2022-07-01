import classes from './Flex.module.css';

function Flex (props) {
	return <div className={classes.flex}>{props.children}</div>;
}

export default Flex;
