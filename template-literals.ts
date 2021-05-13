// Definición de tipos con literales
type Color = 'primary' | 'secondary'; // ...
type Grade = 'Dark' | 'Light';

// Definición de literales usando templates
type ColorAndGrade = `${Color}${Grade}`;

// const primaryDark: ColorAndGrade = 'SomeColor'; Type '"SomeColor"' is not assignable to type '"primaryDark" | "primaryLight" | "secondaryDark" | "secondaryLight"'.ts(2322)
const mainColor: ColorAndGrade = 'primaryDark';
const secondaryColor: ColorAndGrade = 'secondaryLight';