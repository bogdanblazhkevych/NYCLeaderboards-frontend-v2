declare module ".css" {
    const content: { [className: string]: string };
    export default content
}

declare module '*module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module './Components/HeatSelect/HeatSelect' {
    const HeatSelect: any;
    export default HeatSelect;
}

declare module './Components/Navbar/Navbar' {
    const Navbar: any;
    export default Navbar;
}

// declare module './Components/SearchBar/Searchbar' {
//     const Searchbar: any;
//     export default Searchbar;
// }