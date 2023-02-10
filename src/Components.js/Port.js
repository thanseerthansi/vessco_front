import React, { useContext, useEffect, useState } from 'react'
// import Callaxios from './Callaxios'
// import { Simplecontext } from './Simplecontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BiSearch,BiAddToQueue,BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
// import Scripts from './Scripts';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Port() {
    const [modal,setmodal]=useState(false)
  
    useEffect(() => {
        // accesscheck()
        // Scripts()
    }, [])
    const notify = (msg) => toast.success(msg, {
        position: "top-right",
        });
    const notifyerror = (msg) => toast.error(msg, {
        position: "top-right",
        });
    const deleteport = async(itmid)=>{
        notify("delete")
        // try {
        //   let data =await Callaxios("delete",`categories/${itmid}`)
        //   // console.log("data",data)
        //   if (data.status===200){
        //     notify("Deleted Successfully")
        //     getcategory()
        //   }
        // } catch (error) {
        //   notifyerror("Something went wrong")
        // }    
    }
    
    const submitdelete = (itemid) => {
        confirmAlert({
            title: "Confirmation",
            message: `Are you sure to delete this ?`,
            buttons: [
            {
                label: "Yes",           
                onClick:()=>deleteport(),
            },
            {
                label: "No"
                // onClick: () => alert("Click No")
            } 
            ],
            
        });
        };
  return (
    <div className='page-wrapper p-3 mt-5'>
       <ToastContainer/>
      <div className="row">
  <div className="col-md-12 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <div className='row ' >
          <div className='col-6' >
        <h6 className="card-title text-start text-bold">Port</h6>
        <div className='text-start'><button onClick={()=>setmodal(!modal)} className='btn btn-success btn-sm' ><BiAddToQueue size={20}/>Add</button></div>
        </div>
        <div className='col-6'>
        <form className="search-form ml-auto">
          <div className="input-group">
            <div className="input-group-text">
              <BiSearch/>
            </div>
            <input  type="text" className="form-control" id="navbarForm" placeholder="Search here..." />
          </div>
        </form>
        </div>
        </div>

        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Vessel</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {/* {categorydata.length? categorydata.filter(t=>t.name.toLowerCase().includes(searchvalue)).map((itm,k)=>( */}
                <tr >
                <td>1</td>
                <td>name</td>
                <td>
                  <ul className='text-center'>
                    <li className='list-group-item '>
                      <button onClick={()=> setmodal(!modal)} className='btn btn-warning btn-xs edit-btn' ><BiEdit size={15}/>edit</button>
                    </li>
                    <li className='list-group-item mt-1' >
                    
                      <button onClick={()=>submitdelete()} className='btn btn-danger btn-xs' ><RiDeleteBin6Line size={15} />delete</button>
                    </li>
                  </ul>
                </td>
              </tr>
              {/* )):null} */}
              
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

  <div className="modal " id="exampleModalCenter" tabIndex={1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog" style={modal===true ? {display: 'block', paddingRight: 17}:{display:'none'}}>
  <div className="modal-dialog modal-dialog-centered  box-shadow-blank" >
    <div className="modal-content"><div className="modal-header">
      <h5 className="modal-title" id="exampleModalCenterTitle">Port</h5>
      <button onClick={()=>setmodal(!modal)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="btn-close" />
      </div>
      <form className="forms-sample" >
        <div className="modal-body">
        <div className="mb-3 text-start">
          <label htmlFor="userEmail" className="form-label ">Name</label>
          <input type="text" required  className="form-control" placeholder="Name"  />
        </div>
        <div />
        </div>
        <div className="modal-footer">
          <button onClick={()=>setmodal(!modal) } type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    </div>
  </div>
    </div>
  )
}
