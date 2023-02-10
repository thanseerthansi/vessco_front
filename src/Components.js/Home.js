import React from 'react'
import { RiShipFill } from 'react-icons/ri';
import { GiAnchor } from 'react-icons/gi';
import { BiNews } from 'react-icons/bi';
import { MdOutlineEngineering,MdDateRange } from 'react-icons/md';
export default function Home() {
  return (
    <div className='page-wrapper p-3 '>

     
   <div className="row">
  <div className="col-lg-12 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
       
        <div className="table-responsive">
          <table className="table table-striped">
            <thead style={{backgroundColor:"#60ecf6"}} >
              <tr>
                <th>Vessel <br/> <RiShipFill size={20}/></th>
                <th>Job Details <br/><BiNews size={20}/></th>
                <th>Engineer <br/><MdOutlineEngineering size={20}/></th>
                <th>Port <br/><GiAnchor size={20}/></th>
                <th>ETA <br/><MdDateRange size={20}/></th>
                <th>ETD <br/><MdDateRange size={20}/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">Vessel 1</td>
                <td>maintaine</td>
                <td>engineer 1</td>
                <td>$206,850</td>
                <td>June 21, 2022</td>
                <td>June 22, 2022</td>
              </tr>
              <tr>
                <td className="py-1">Vessel 1</td>
                <td>maintaine</td>
                <td>engineer 1</td>
                <td>$206,850</td>
                <td>June 21, 2022</td>
                <td>June 22, 2022</td>
              </tr>
              <tr>
                <td className="py-1">Vessel 1</td>
                <td>maintaine</td>
                <td>engineer 1</td>
                <td>$206,850</td>
                <td>June 21, 2022</td>
                <td>June 22, 2022</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

 </div>
  )
}
