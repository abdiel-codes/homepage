import "../stylesheets/NavButton.css";

function NavButton (props) {
    return (
        <button className={props.class} onClick={() => props.link()}><span>{props.symbol}</span>{props.name}</button>
    );
}

export default NavButton;