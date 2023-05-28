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