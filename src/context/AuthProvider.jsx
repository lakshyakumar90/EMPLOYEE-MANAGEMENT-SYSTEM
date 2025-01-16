import React, { createContext, useState, useEffect } from "react";

export const  AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  const updateEmployees = (updatedEmployees) => {
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <AuthContext.Provider value={{ employees, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  );
};
