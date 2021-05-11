/* 
  Tenemos dos tipos de usuario, uno logado y otro desconocido. La solución más sencilla es convertir name en opcional
  pero esto puede provocar errores en un futuro ya que si no se hace la comprobación por tipo no sabemos si tenemos
  name o no. Para ello podemos usar los discriminated union en typescript y forzar a hacer esa comprobación durante la codificación.
*/

type User = {
    type: 'authenticated';
    name: string;
} | { type: 'unknown' };

const user: User = { type: 'authenticated', name: 'Jhon' } as any; // Simulamos que no sabemos el tipo de usuario que nos viene.

// user.name Si intentamos acceder a la propiedad name el compilador nos dice: Property 'name' does not exist on type '{ type: "unknown"; }'

// Tenemos que hacer la comprobación del tipo primero.

if (user.type === 'authenticated') {
    user.name;
}

/* 
  Si tenemos propiedades en común entre los tipos podemos combinar los discriminated union con las intersecciones.
*/

type AnotherUser = { id: string } 
  & ({
    type: 'authenticated';
    name: string;
  } | { type: 'unknown' }
);