export default function TypeAliases() {
    // A type alias is exactly that - a name for any type.
    // a type cannot be re-opened to add new properties vs an interface which is always extendable.
    type Dog = {
        name: string,
        breed: string,
        age?: number,
        isActive: boolean,
    };

    function printDog(dog: Dog): string {
        return `hello ${dog.name}, your account is active?: ${dog.isActive}.`
    };

    return(
        <div>
            <h1>{printDog({name: 'Nala', breed: 'cooker', isActive: true})}</h1>
        </div>
    )
}