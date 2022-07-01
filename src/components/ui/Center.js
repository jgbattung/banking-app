import classes from '../ui/Center.module.css';

function Center (props) {
	return <div className={classes.center}>{props.children}</div>;
}

export default Center;
