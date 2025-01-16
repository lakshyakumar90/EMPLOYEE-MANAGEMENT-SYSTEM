import React, { useState } from 'react'

const Header = ({func, data}) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    func();
    // window.location.reload();
  }

  return (
    <header className="w-full flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Hello, <span className="text-yellow-400">{data ? data.firstName : "Admin"}</span> 👋
          </h1>
        </div>
        <button onClick={logOutUser} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
          Log Out
        </button>
      </header>
  )
}

export default Header