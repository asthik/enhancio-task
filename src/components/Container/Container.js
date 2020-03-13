import React from 'react';
import './Container.css';

class Container extends React.Component {

    oncall = () => {
        (async () => {
            let resp = await fetch('http://54.193.89.54:8230/readFields');
            console.log(resp);
            if(resp.ok) {
            console.log('success');
            let jsonn = await resp.json();
                console.log('data obtained: ' + JSON.stringify(jsonn[0]));
            } else {
            console.log('http error: ' + resp.status);
            }
        })();

        // fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(response => response.json())
        //     .then(data => console.log(data));
    }

    render(){
        return (
            <div className="container">
              container works!!
              <input type="button" onClick={this.oncall} value="Save" />
            </div>
          );
    }
}

export default Container;
