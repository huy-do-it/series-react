import PropTypes from 'prop-types';

export default function TabButton({children}) {
    return (
        <li><button>{children}</button></li>
    );
}

TabButton.propTypes = {
    children: PropTypes.node.isRequired
};

// export default function TabButton({ batky }) {
//     return (
//         <li>
//             <button>{batky}</button>
//         </li>
//     );
// }