import React from 'react';
import ReactDOM from 'react-dom';

function RenderPerson(div1 : any, div2 : any, div3 : any) {

    ReactDOM.render(
        <div>
            <br/>
            {div1}
            <br/>
            {div2}
            <br/>
            {div3}
        </div>
        , document.getElementById('root')
    );
}

export default RenderPerson