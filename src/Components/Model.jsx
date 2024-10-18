import { useNavigate } from 'react-router-dom';
import classes from './Model.module.css'

function Model(props){
    const navigator = useNavigate();
    function closeHandler(){
        navigator('..')
    }
    return (
        <>
        <div className = {classes.backdrop} onClick = {closeHandler}/>
            <dialog open className = {classes.model}>
                {props.children}
            </dialog>
        </>
    )
}

export default Model;