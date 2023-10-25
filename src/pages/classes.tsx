class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string,
    ) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
export default function Classes() {
    // you can define interfaces to detail the structure 
        interface Person {
            firstName: string,
            lastName: string, 
        }
    // Functions parameters can be type using interfaces.
        function greeter (person: Person) {
            return 'Hello, ' + person.firstName + ' ' + person.lastName;
        }

        let user = new Student('Laura','C','Cardenas');
    
        return(
            <div>
                <h1>{greeter(user)}</h1>
            </div>
        )
    }