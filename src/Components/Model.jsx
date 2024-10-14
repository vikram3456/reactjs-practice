import classes from './Model.module.css'

function Model(props){
    return (
        <>
        <div className = {classes.backdrop} onClick = {props.onClose}/>
            <dialog open className = {classes.model}>
                {props.children}
            </dialog>
        </>
    )
}

export default Model;