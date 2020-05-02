import React from 'react';

import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import 'milligram';


const SearchCep = ({ address, city, district, state, code, status, handlerSubmit, isFaching, ok }) => {
  return (
    <div> 
      <form onSubmit={ handlerSubmit }>
        <input type="text" name="cep" />
        {
          isFaching ? (
            <div>
              <Spinner className="center-content" name="circle" color="blue"/>
            </div>

          ) : (
            
            <button type="submit">Search cep</button>
          )
        }
      </form>
      
      {
        status === 200 && (
          <table>
            <thead>
              <tr>
                <td>Cep</td>
                <td>Address</td>
                <td>District</td>
                <td>City</td>
                <td>State</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{ code }</td>
                <td>{ address }</td>
                <td>{ district }</td>
                <td>{ city }</td>
                <td>{ state }</td>
              </tr>
            </tbody>
          </table>
        ) 
      }

      {
        !ok && (
          <div>
            <p style={{color: 'red', fontWeight: 400}}>{ 'Cep not found' }</p>
          </div>

        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.address
}

export default connect(mapStateToProps)(SearchCep);