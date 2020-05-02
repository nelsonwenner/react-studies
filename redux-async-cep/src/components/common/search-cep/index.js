import React from 'react';

import 'milligram';

const SearchCep = () => {
  return (
    <div>
      <form>
        <input type="text" name="cep" />
        <button type="submit">Search cep</button>
      </form>

      <table>
        <thead>
          <tr>
            <td>Cep</td>
            <td>Address</td>
            <td>District</td>
            <td>State</td>
          </tr>
        </thead>
      
        <tbody>
          <tr>
            <td>1111</td>
            <td>Rua são bartolomeu</td>
            <td>Irmã dulce</td>
            <td>Piaui</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SearchCep;