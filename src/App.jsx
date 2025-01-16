import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDasboard from "./components/Dashboard/EmployeeDasboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import {setLocalStorage} from "./utils/localStorage"

const App = () => {
  // setLocalStorage();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext); 

  // Sync localStorage and React state
  const syncLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    if (key === "loggedInUser") {
      setUser(value?.role || null);
      setLoggedInUserData(value?.data || null);
    }
  };

  // Handle login
  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      syncLocalStorage("loggedInUser", { role: "admin" });
    } else {
      const employee = authData.employees.find(
        (emp) => emp.email === email && emp.password === password
      );
      if (employee) {
        syncLocalStorage("loggedInUser", { role: "employee", data: employee });
      } else {
        setError("Invalid email or password");
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  // Effect: Sync logged-in user on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [authData.employees]); // Depend on employees to reflect updates immediately

  // Effect: Handle storage changes (cross-tab sync)
  useEffect(() => {
    const handleStorageChange = () => {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setLoggedInUserData(loggedInUser.data);
      } else {
        setUser(null);
        setLoggedInUserData(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-zinc-900 text-[#ebeaea]">
      {user === null ? (
        <Login handleLogin={handleLogin} error={error} />
      ) : user === "admin" ? (
        <AdminDashboard
          func={handleLogout}
          data={loggedInUserData}
          employees={authData.employees} // Fetch employees directly from context
          updateEmployees={authData.updateEmployees}
        />
      ) : (
        <EmployeeDasboard
          func={handleLogout}
          data={authData.employees.find(
            (emp) => emp.id === loggedInUserData?.id
          )} // Ensure the latest data is passed
        />
      )}
    </div>
  );
};

export default App;
