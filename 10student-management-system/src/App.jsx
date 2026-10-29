import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");

  const students = [
    {
      id: "STU001",
      rollNo: 101,
      name: "Jiya Pawar",
      department: "BCA",
      year: "First Year",
      email: "jiya879@gmail.com"
    },
    {
      id: "STU002",
      rollNo: 102,
      name: "Kartiki Nagare",
      department: "MCA",
      year: "Second Year",
      email: "kartikin06@gmail.com"
    },
    {
      id: "STU003",
      rollNo: 103,
      name: "Yogita Shinde",
      department: "B.Tech",
      year: "Final Year",
      email: "yshinde899@gmail.com"
    },
    {
      id: "STU004",
      rollNo: 104,
      name: "Aradhya Patel",
      department: "BBA",
      year: "Third Year",
      email: "aradhyap09@gmail.com"
    }
  ]

  const filteredStudents = students.filter((student => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) || 
      student.id.toLowerCase().includes(search.toLowerCase()) ||
      String(student.rollNo).includes(search) ||
      student.department.toLowerCase().includes(search.toLowerCase()))
  }))

  const addStudent = () => {
    if (!name || !rollNo || !email) {
    alert("Please fill all fields");
    return;
  }

    alert("Student Added Successfully!");

    setName("");
    setRollNo("");
    setEmail("");
    setShowForm(false);
  };
 

  return (
    <div classname="erp-container">

      {/*Sidebar*/}
      <aside classname="sidebar">
        <h2> College ERP </h2>

        <nav>
          <p classname="active">Dashboard</p>
          <p>Students</p>
          <p>Departments</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/*Main Content*/}
      <main className="main-content">

        <header classname="topbar">
          <h1>Dashboard</h1>
          <p>Welcome, Admin</p>
        </header>


      {/*Dashboard Cards*/}
      <section className="cards">

      <div className="card">
        <h3>Total Students</h3>
        <h2>250</h2>
      </div>

      <div className="card">
        <h3>Departments</h3>
        <h2>4</h2>
      </div>

      <div className="card">
        <h3>Courses</h3>
        <h2>6</h2>
      </div>

      </section>

      {/*Recent Students*/}
      <section className="student-section">
        <h2>Student Records</h2>
        <button onClick={() => setShowForm(!showForm)}>+ Add Student</button>

        {showForm && (
          <div>
            <input type="text" placeholder="Student Name" 
               value={name} 
               onChange={(e) => setName(e.target.value)}/> 
            
            <input type="number" placeholder="Roll Number"
               value={rollNo}
               onChange={(e) => setRollNo(e.target.value)}/> 
            
            <input type="email" placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>
          
            <button onclick={addStudent}>Save Student</button>
          </div>
        )}


        <input
            type="text"
            placeholder="Search by name, ID, roll no. or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"/>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Roll No.</th>
                <th>Name</th>
                <th>Department</th>
                <th>Year</th>
                <th>Email</th>
              </tr>
            </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>{student.email}</td>
              </tr>
            ))}
            </tbody>  
          </table>
        </div>
      </section>
    </main>
  </div>
  );
}     

export default App;