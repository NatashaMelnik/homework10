import { JSXARR } from './StyledComponents'

export function CreateDOMELement(person : any) {

    let perName = <h1 className='perName'>Name: {person.name}</h1>;
    let perHeight = <h2 className='perHeight'>Height: {person.height}</h2>;
    let perMass = <h2 className='perMass'>Mass: {person.mass}</h2>;
    let perHair = <h2 className='perHair'>Hair_color: {person.hair_color}</h2>;

    return (<JSXARR className='jsxArr'>{perName}{perHeight}{perMass}{perHair}</JSXARR>);
}
