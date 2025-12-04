import PropTypes from 'prop-types';

//js
// const btn = document.querySelector('button');
// btn.addEventListener("click",() => {
//     console.log("Clicked");
// });


function handleClick() {
    alert("Nút bấm được clicked!");
}
export default function TabButton({children}) {
    return (
        <li><button onClick={handleClick}>{children}</button></li>
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