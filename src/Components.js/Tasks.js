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

export default function Tasks() {
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
    const deletetask = async(itmid)=>{
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
                onClick:()=>deletetask(),
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
        <h6 className="card-title text-start text-bold">Tasks</h6>
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
                <th>Job Details</th>
                <th>Engineer</th>
                <th>Port</th>
                <th>ETA</th>
                <th>ETD</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {categorydata.length? categorydata.filter(t=>t.name.toLowerCase().includes(searchvalue)).map((itm,k)=>( */}
                <tr >
                <td>1</td>
                <td>name</td>
                <td>job</td>
                <td>engineer</td>
                <td>port</td>
                <td>11/02/2023</td>
                <td>12/02/2023</td>
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
          <div className="row mt-1 mr-auto ">
                <div className=" ">
                  <div className="dataTables_paginate paging_simple_numbers " >

                    <ul className="pagination ">

                      <li className="paginate_button page-item previous" id="dataTableExample_previous">
                        <button  className="page-link">Previous</button>
                      </li>
                      <li className="paginate_button page-item previous" id="dataTableExample_previous">
                        <button disabled className="page-link active">1</button>
                      </li>


                      <li className="paginate_button page-item next" id="dataTableExample_next">
                        <button className="page-link">Next</button>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <div className="modal " id="exampleModalCenter" tabIndex={1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog" style={modal===true ? {display: 'block', paddingRight: 17}:{display:'none'}}>
  <div className="modal-dialog modal-dialog-centered modal-lg box-shadow-blank" >
    <div className="modal-content"><div className="modal-header">
      <h5 className="modal-title" id="exampleModalCenterTitle">Tasks</h5>
      <button onClick={()=>setmodal(!modal)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="btn-close" />
      </div>
      <form className="forms-sample" >
        <div className="modal-body">
            <div className='row text-start'>
                <div className="mb-3  col-6">
                    <label htmlFor="select" className="form-label ">Vessel</label>
                    <select required  className="form-select" id="exampleFormControlSelect1">
                          <option hidden>Select Vessel</option>
                          <option  >vessel 1</option>
                          <option   >Vessel 2</option>
                        </select>
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="userEmail" className="form-label ">Job Details</label>
                    <input type="text" required  className="form-control" placeholder="Job Details"  />
                </div>
                <div className="mb-3  col-6">
                    <label htmlFor="select" className="form-label ">Engineer</label>
                    <select required  className="form-select" id="exampleFormControlSelect1">
                          <option hidden>Select Engineer</option>
                          <option  >engineer  1</option>
                          <option   >Engineer 2</option>
                        </select>
                </div>
                <div className="mb-3  col-6">
                    <label htmlFor="select" className="form-label ">Port</label>
                    <select required  className="form-select" id="exampleFormControlSelect1">
                          <option hidden>Select Port</option>
                          <option  >Port 1</option>
                          <option   >Port 2</option>
                        </select>
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="userEmail" className="form-label ">ETA</label>
                    <input type="date" required  className="form-control" placeholder="Job Details"  />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="userEmail" className="form-label ">ETD</label>
                    <input type="date" required  className="form-control" placeholder="Job Details"  />
                </div>
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
