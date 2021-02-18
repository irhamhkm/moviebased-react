import React from 'react';

function WithNavbar(props) {
  const { title } = props;
  return (
    <div>
      <nav className="bg-white shadow fixed z-50 w-full max-w-md h-12 top-0">
        {title}
      </nav>
      <div className="pt-16">
        {props.children}
      </div>
    </div>
  );
}

export default WithNavbar;
