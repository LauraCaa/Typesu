export default function Interfaces(){
// you can define interfaces to detail the structure 
    interface Person {
        firstName: string,
        lastName: string, 
    }
// Functions parameters can be type using interfaces.
    function greeter (person: Person){
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }

    return(
        <div>
            <h1>{greeter({firstName: 'Camila',lastName: 'Cardenas'})}</h1>
        </div>
    )
}