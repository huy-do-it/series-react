//js
// const btn = document.querySelector('button');
// btn.addEventListener("click",() => {
//     console.log("Clicked");
// });



export default function TabButton({children, isSelected, ...props}) {
    return (
        <li><button className={isSelected ? "active" : undefined} {...props}>{children}</button></li>
    );
}

// export default function TabButton({ batky }) {
//     return (
//         <li>
//             <button>{batky}</button>
//         </li>
//     );
// }