type Animal = 'dog' | 'cat' | 'bird' | 'cow';

// Capitalize
//const capitalizedAnimal: Capitalize<Animal> = 'dog'; Type '"dog"' is not assignable to type '"Dog" | "Cat" | "Bird" | "Cow"'.
const capitalizedAnimal: Capitalize<Animal> = 'Dog';

// Uncapitalize
// const uncapitalizedAnimal: Uncapitalize<Animal> = 'Cat'; Type '"Cat"' is not assignable to type 'Animal'.
const uncapitalizedAnimal: Uncapitalize<Animal> = 'cat';

// Uppercase
// const uppercaseAnimal: Uppercase<Animal> = 'bird'; Type '"bird"' is not assignable to type '"DOG" | "CAT" | "BIRD" | "COW"'.
const uppercaseAnimal: Uppercase<Animal> = 'BIRD';

// Lowercase
// const lowercaseAnimal: Lowercase<Animal> = 'COW'; Type '"COW"' is not assignable to type 'Animal'.
const lowercaseAnimal: Lowercase<Animal> = 'cow';