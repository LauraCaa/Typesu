export default function TypeUnion(){
    // You can assign differents types for type notation.
   function printId(id: number | string): number | string {
    return id;
   }
        return(
            <div>
                <h1>{printId(18)}</h1>
                <h1>{printId('diez')}</h1>
            </div>
        )
    }