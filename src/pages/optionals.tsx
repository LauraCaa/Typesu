export default function Optional(){
    // Optional properties can be use and indicate using the '?' sign.
   function printName (user: {first: string, last ?: string }): string {
    return  user.first + ' ' + user.last;
   }
        return(
            <div>
                <h1>{printName({first: 'Camilita'})}</h1>
                <h1>{printName({first: 'Camilita', last: 'Cardenitas'})}</h1>
            </div>
        )
    }