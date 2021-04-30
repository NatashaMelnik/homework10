import RenderPerson from './RenderPerson';
import { getApi10, getApi11, getApi5 } from '../service/GetApi';
import { CreateDOMELement } from './CreateDOMELement';

function CreatePersons() {

    const getAllDatas = new Promise(() => {
        let jsxArr : any = [];

        getApi10().then((value) => {
            jsxArr[0] = CreateDOMELement(value);
            RenderPerson(jsxArr[0], jsxArr[1], jsxArr[2]);
        });
        getApi11().then((value) => {
            jsxArr[1] = CreateDOMELement(value);
            RenderPerson(jsxArr[0], jsxArr[1], jsxArr[2]);
        });
        getApi5().then((value) => {
            jsxArr[2] = CreateDOMELement(value);
            RenderPerson(jsxArr[0], jsxArr[1], jsxArr[2]);
        });

    });

}

export default CreatePersons