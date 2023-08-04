import { ReactComponent as CkeckSVG } from '../TodoIcon/check.svg'; //sintaxis para importar los iconos 
import { ReactComponent as DeleteSVG } from '../TodoIcon/delete.svg'; 
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <CkeckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({type, color, onClick }) {
    return (
        <span 
            className={`Icon-container Icon-container-${type}`} onClick={onClick}
        >
            {iconTypes[type] (color)}
        </span>
    );
}


export { TodoIcon };