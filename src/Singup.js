import { tsConstructorType } from '@babel/types';
import React,{Component} from 'react';
import {variables} from './Variables.js';


export class Singup extends Component{
    
    constructor(props){
        super(props);


        this.state={
            singups:[],
            modalTitle:"",
            UserName:"",
            UserEmail:"",
            UserpassW:"",
            UserSignId:0
        }
    }
    refreshList(){
        fetch(variables.API_URL+'singup')
        .then(response=>response.json())
        .then(data=>{
            this.setState({singups:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    changeUserName =(e)=>{
        this.setState({UserName:e.target.value});
    }
    changeUserEmail =(e)=>{
        this.setState({UserEmail:e.target.value});
    }
    changeUserpassW =(e)=>{
        this.setState({UserpassW:e.target.value})
    }
    addClick(){
        this.setState({
            modalTitle:"Add Singup",
            UserSignId:0,
            UserName:"",
            UserEmail:"",
            UserpassW:""
        });
    }
    editClick(log){
        this.setState({
            modalTitle:"Edit Singup",
            UserSignId:log.UserSignId,
            UserName:log.UserName,
            UserEmail:log.UserEmail,
            UserpassW:log.UserpassW,

        });
    }
    createClick(){
        fetch(variables.API_URL+'singup',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                UserName:this.state.UserName,
                UserEmail:this.state.UserEmail,
                UserpassW:this.state.UserpassW,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }
    updateClick(){
        fetch(variables.API_URL+'singup',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                UserSignId:this.state.UserSignId,
                UserName:this.state.UserName,
                UserEmail:this.state.UserEmail,
                UserpassW:this.state.UserpassW,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }
    deleteClick(id){
        if(window.confirm('Are you syre')){
        fetch(variables.API_URL+'singup/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }
    }
    
    render(){
        const{
            singups,
            modalTitle,
            UserSignId,
            UserName,
            UserEmail,
            UserpassW
        }=this.state;

        return(
            <div>
                <button type="button"
                className="btn btn-primary m-2 fload-end"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.addClick()}>
                    Add Singup
                </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                            UserSignId
                            </th>
                            <th>
                            UserName
                            </th>
                            <th>
                            UserEmail
                            </th>
                            <th>
                            UserpassW
                            </th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {singups.map(log=>
                            <tr key={log.UserSignId}>
                                <td>{log.UserSignId}</td>
                                <td>{log.UserName}</td>
                                <td>{log.UserpassW}</td>
                                <td>{log.UserEmail}</td>
                               <td>
                                <button type="button"
                                className="btn btn-light mr-1"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={()=>this.editClick(log)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button>
                                <button type="button"
                                className="btn btn-light mr-1"
                                    onClick={()=>this.deleteClick(log.UserSignId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    </button>
                               </td>
                            </tr>
                            )}
                    </tbody>
                </table>    
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centred">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body">
                            <div className="d-flex flex-row bd-highlight mb-3">

                            <div className="p-2 w-50 bd-highlight">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">UserName</span>
                                    <input type="text" className="form-control"
                                    value={UserName}
                                    onChange={this.changeUserName}/>
                                </div>
                                </div>
                                <div className="p-2 w-50 bd-highlight">
                                <div className="input-group mb-3">
                                <span className="input-group-text">UserEmail</span>
                                <input type="text" className="form-control"
                                value={UserEmail}
                                onChange={this.changeUserEmail}/>
                                </div>
                                </div>
                                 
                                <div className="p-2 w-50 bd-highlight">
                                 <div className="input-group mb-3">
                                <span className="input-group-text">UserpassW</span>
                                <input type="text" className="form-control"
                                value={UserpassW}
                                onChange={this.changeUserpassW}/>
                                </div>
                                 </div>
                                 </div>

                     

                                {UserSignId==0?
                                <button type="button"
                                 className="btn btn-primary float-start"
                                 onClick={()=>this.createClick()}
                                >Create</button>
                                :null}

                                {UserSignId!=0?
                                <button type="button"
                                 className="btn btn-primary float-start"
                                 onClick={()=>this.updateClick()}
                                >Update</button>
                                :null}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     
        
        )
    }
   
}