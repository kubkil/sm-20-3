import React from 'react';

// czy można zastąpić
// const CountryFlag = country => (
//   <div className="country-logo-wrapper">
//     <img className="country-logo" src={country.imageUrl} alt="country photo" />
//   </div>
// );
const CountryFlag = (props) => (
  <div className="country-logo-wrapper">
    <img className="country-logo" src={props.country.imageUrl} alt="country" />
  </div>
);

export default CountryFlag;