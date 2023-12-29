import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('image', employee.image);
    formData.append('category_id', employee.category_id);

    axios.post('http://localhost:3000/auth/add_employee', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/dashboard/employee')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Date"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Recruiter Name
            </label>
            <input
              type="Recruiter name"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Recruiter Name"
              onChange={(e) =>
                setEmployee({ ...employee, recruitername: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Domain
            </label>
            <input
              type="domain"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Domain"
              onChange={(e) =>
                setEmployee({ ...employee, domain: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Candidate Name
            </label>
            <input
              type="candidate name"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Candidate Name"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, candidatename: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
              Mobile no
            </label>
            <input
              type="mobile no"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Mobile no"
              onChange={(e) =>
                setEmployee({ ...employee, mobileno: e.target.value })
              }
            />
            <label for="inputSalary" className="form-label">
              Mail ID
            </label>
            <input
              type="mail id"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Mail ID"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, mailid: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Exp
            </label>
            <input
              type="exp"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="Exp"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, exp: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              CTC
            </label>
            <input
              type="ctc"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="CTC"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, ctc: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              ECTC
            </label>
            <input
              type="ectc"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="ECTC"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, ectc: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Notice Period
            </label>
            <input
              type="notice period"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="Notice Period"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, noticeperiod: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Remarks
            </label>
            <input
              type="remarks"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="Remarks"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, remarks: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Resume
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="Resume"
             onChange={(e) =>
                setEmployee({ ...employee, resume: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="category" className="form-label">
              Category
            </label>
            <select name="category" id="category" className="form-select"
                onChange={(e) => setEmployee({...employee, category_id: e.target.value})}>
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" for="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
