export default function Annotations(){
//  Type annotation can be impicit by typescript
// you can add ´: type´ after the var declaration 
    const name: string = 'camila'
// function parameters can have a type annotation 
// also we can define in the function result 'return type annotatio'
    function sum(number1 : number, number2 : number):number {
        return number1 + number2;
    }
// A function can return a Promise and this Promise can be any typer line 'number, string,..'
    async function createUser(): Promise<number> {
        return 4;
        
    }
        return(
            <div>
                <h1>{sum(3,4)}</h1>
            </div>
        )
    }