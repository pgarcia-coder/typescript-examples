type User = {
    id: number;
    alias: string;
    avatar?: string;
    age?: number;
}

type Name = 'Alex' | 'Jhon';

declare function createUser(id: number, alias: string, avatar: string, age: number): User;

// Partial: convierte todas las propiedades en opcionales
const partialUser: Partial<User> = { alias: 'theBest' };

// Required: convierte todas las propiedades en requeridas
const requiredUser: Required<User> = { id: 1, alias: 'theBest', avatar: 'thebest.png', age: 21 };

// Readonly: convierte todas las propiedades en inmutables
const readonlyUser: Readonly<User> = { id: 1, alias: 'theBest', avatar: 'thebest.png', age: 21 };
// readonlyUser.age = 25; Cannot assign to 'age' because it is a read-only property.ts(2540)

// Record: convierte dos tipos en un map. El primer tipo representa las claves y el segundo los valores
const recordUser: Record<Name, User> = {
    Alex: { id: 1, alias: 'alexTheBest' },
    Jhon: { id: 2, alias: 'jhonTheWorst' },
}

// Pick: crea un tipo con las propiedades indicadas
const pickUser: Pick<User, 'alias' | 'age'> = { alias: 'alexTheBest', age: 22 };

// Omit: crea un tipo omitiendo las propiedades indicadas
const omitUser: Omit<User, 'alias' | 'age'> = { id: 1, avatar: 'thebest.png' };

// Exclude: crea un tipo exclutendo los tipos comunes
const excludeAvatar: Exclude<'thebest.png' | 'theworst.png', 'theworst.png'> = 'thebest.png';
// const excludeAvatar : Exclude<'thebest.png' | 'theworst.png', 'theworst.png'> = 'theworst.png'; Type '"theworst.png"' is not assignable to type '"thebest.png"'.ts(2322)

// Extract: crea un tipo incluyendo los tipos comunes
const extractAvatar: Extract<'thebest.png' | 'theworst.png', 'theworst.png'> = 'theworst.png';
//const extractAvatar : Extract<'thebest.png' | 'theworst.png', 'theworst.png'> = 'thebest.png'; Type '"thebest.png"' is not assignable to type '"theworst.png"'.ts(2322)

// NonNullable: crea un tipo omitiendo los tipos null o undefined
const nonNullableUser: NonNullable<User> = { id: 1, alias: 'theBest' };

// Parameters: crea un array con los tipos correspondientes a los parametros de la función
const parametersUser: Parameters<typeof createUser> = [1, 'theBest', 'thebest.png', 21];

// ReturnType: crea un typo en función del tipo de retorno de la función
const returnType: ReturnType<()=> string> = 'hello';

// String Manipulation Types

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

