export default function Greeter(){
// Functions parameters can be type (string,number,boolean,{},[])
    function greeter (person: string){
        return 'Hello,' + person;
    }
    return(
        <div>
            <h1>{greeter('Camila')}</h1>
        </div>
    )
}