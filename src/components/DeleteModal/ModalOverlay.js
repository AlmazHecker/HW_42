import classes from '../UI/ModalOverlay/ModalOverlay.module.css'
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>Delete or cancel</h2>
        </header>
        <div className={classes.content}>
            <p>Do you want to delete this User ?</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onDelete}>Delete</Button>
            <Button onClick={props.onCancel}>Cancel</Button>
        </footer>
    </Card>
}

export default ModalOverlay;