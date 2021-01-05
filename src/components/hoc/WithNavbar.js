import React from 'react';

function WithNavbar(props) {
  return (
    <div>
      <nav className="bg-white shadow fixed z-50 w-full max-w-md h-12 top-0"></nav>
      <div className="pt-14">
        {props.children}
      </div>
    </div>
  );
}

export default WithNavbar;
