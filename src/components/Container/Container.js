import React from 'react';
import './Container.css';
import FormInput from '../FormInput/FormInput';
import axios from 'axios';

class Container extends React.Component {
    state = {
        firstname : "",
        lastname : "",
        email : "",
        title : "",
        companyname : "",
        joblevel : "",
        jobfunction : "",
        companysize : "",
        industry : "",
        resource : "",
        streetAddress : "",
        city : "",
        state : "",
        country : "",
        zipcode : ""
        // counters: [
        //     {id:1, value:4},
        //     {id:2, value:2},
        //     {id:3, value:0},
        //     {id:4, value:3}
        //    ]
    }
    
    handleSubmit = async e => {
        e.preventDefault();

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

        // axios({
        //     url: 'http://54.193.89.54:8230/saveFields',
        //     method: 'post',
        //     // data :{"data" : {"name" : this.state.name}}
        //     data :{"data" : [
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.firstname,"fieldType":"TXT","mandatory":"Y","order":1,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.email,"fieldType":"TXT","mandatory":"Y","order":2,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.companyname,"fieldType":"TXT","mandatory":"Y","order":3,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.jobfunction,"fieldType":"TXT","mandatory":"Y","order":4,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.industry,"fieldType":"TXT","mandatory":"Y","order":5,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.streetAddress,"fieldType":"TXT","mandatory":"Y","order":6,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.state,"fieldType":"TXT","mandatory":"Y","order":7,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.zipcode,"fieldType":"TXT","mandatory":"Y","order":8,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.lastname,"fieldType":"TXT","mandatory":"Y","order":9,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.title,"fieldType":"TXT","mandatory":"Y","order":10,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.joblevel,"fieldType":"TXT","mandatory":"Y","order":11,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.companysize,"fieldType":"TXT","mandatory":"Y","order":12,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.resource,"fieldType":"TXT","mandatory":"Y","order":13,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.city,"fieldType":"TXT","mandatory":"Y","order":14,"expectedValues":[]},
        //         {"id":null,"createdOn": new Date(), "fieldName":this.state.country,"fieldType":"TXT","mandatory":"Y","order":15,"expectedValues":[]}
        //     ]
        //     }
        //   }).then((response) => {
        //     if(response.data.status === "success"){
        //         // this.props.updateValues({values : response.data.data}) ;
        //         axios.get('http://54.193.89.54:8230/readFields')
        //         .then((response)=> {
        //             this.props.updateValues(response.data.data) ;
        //             this.setState({errorMsg: ""});
        //             this.handleReset();
        //         });
        //     }else{
        //         this.setState({errorMsg: response.data.message});
        //     }
        // });
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({[name] : value });
    }

    render(){
        return (
            <div className="container">
              {/* <input type="text" class="col-md-3 col-lg-6"/> */}

              <form onSubmit={this.handleSubmit}>

              {/* {this.state.counters.map((e,i) => 
                <FormInput key={e.id} onDelete={this.handleDelete} counter={e} selected ...otherProps/>               
                )} */}
                <div className="leftContainer col-md-6">
                    <FormInput 
                        type="text" 
                        value={this.state.firstname} 
                        label="First Name"
                        name="firstname" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.email} 
                        label="Email Address"
                        name="email" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.companyname} 
                        label="Company Name"
                        name="companyname" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.jobfunction} 
                        label="Job function"
                        name="jobfunction" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.industry} 
                        label="Industry"
                        name="industry" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.streetAddress} 
                        label="Street Address"
                        name="streetAddress" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.state} 
                        label="State"
                        name="state" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.zipcode} 
                        label="Zip code"
                        name="zipcode" 
                        required 
                        handleChange={this.handleChange}/>
                </div>
                <div className="rightContainer col-md-6">
                    <FormInput 
                        type="text" 
                        value={this.state.lastname} 
                        label="Last Name"
                        name="lastname" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.title} 
                        label="Title"
                        name="title" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.firstname} 
                        label="Job Level"
                        name="joblevel" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.companysize} 
                        label="Company Size"
                        name="companysize" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.resource} 
                        label="Resource"
                        name="resource" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.city} 
                        label="City"
                        name="city" 
                        required 
                        handleChange={this.handleChange}/>
                    <FormInput 
                        type="text" 
                        value={this.state.country} 
                        label="Country"
                        name="country" 
                        required 
                        handleChange={this.handleChange}/>
                </div>

              <input type="submit" value="Save" />
                    
                </form>
            </div>
          );
    }
}

export default Container;
