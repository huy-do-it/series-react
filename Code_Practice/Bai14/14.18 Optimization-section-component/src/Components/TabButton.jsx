//js
// const btn = document.querySelector('button');
// btn.addEventListener("click",() => {
//     console.log("Clicked");
// });



export default function TabButton({children, onSelect, isSelected}) {
    return (
        <li><button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button></li>
    );
}

// export default function TabButton({ batky }) {
//     return (
//         <li>
//             <button>{batky}</button>
//         </li>
//     );
// }