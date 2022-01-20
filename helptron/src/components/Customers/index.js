import { useState, useEffect } from "react";
import Header from "../Header";
import { useFormik } from "formik";
import validations from "./validations";
import { generateGuid } from "easy-guid-generator";
import { Link, Outlet } from "react-router-dom";

function Customers({ customers, customersState }) {

    const [mode, setMode] = useState("list");

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            id: "",
            firstname: "",
            lastname: "",
            phone: "",
            email: ""
        },
        onSubmit: (values) => {
            console.log(values);

            if (mode === "add") {
                customersState([...customers, {
                    id: generateGuid(false),
                    firstname: values.firstname,
                    lastname: values.lastname,
                    phone: values.phone,
                    email: values.email
                }]);
            } else if (mode === "edit") {
                const cust = customers.find((item) => item.id === values.id);
                cust.firstname = values.firstname;
                cust.lastname = values.lastname;
                cust.phone = values.phone;
                cust.email = values.email;

                customersState([...customers]);
            }
        },
        validationSchema: validations
    });

    const onClickEdit = (e) => {
        const id = e.target.getAttribute("data-id");
        const cus = customers.find((item) => item.id === id);

        values.id = cus.id;
        values.firstname = cus.firstname;
        values.lastname = cus.lastname;
        values.phone = cus.phone;
        values.email = cus.email;

        setMode("edit");
    };

    const onClickRemove = (e) => {
        const id = e.target.getAttribute("data-id");
        const cus = customers.find((item) => item.id === id);
        const result = window.confirm(`${cus.firstname} ${cus.lastname} isimli müşteri silinsin mi?`);

        if (cus && result) {
            const index = customers.indexOf(cus);
            customers.splice(index, 1);
            customersState([...customers]);
        }
    };

    useEffect(() => {
        console.log("mode", mode);
    }, [mode]);

    return (
        <>
            <Header title="Customers" />

            {
                mode === "list" &&
                <div className="row mb-3">
                    <div className="col">
                        <button className="btn btn-primary btn-sm" onClick={() => setMode("add")}>
                            <i className="fa fa-plus me-2"></i>Add New
                        </button>
                    </div>
                </div>
            }

            {
                (mode === "add" || mode === "edit") &&
                <div className="row mb-3">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="firstname" placeholder="John" className="form-control form-control-sm"
                                        onChange={handleChange} value={values.firstname} />
                                    <div className="badge small bg-danger">{errors.firstname}</div>
                                </div>
                                <div className="col">
                                    <input type="text" name="lastname" placeholder="Doe" className="form-control form-control-sm"
                                        onChange={handleChange} value={values.lastname} />
                                    <div className="badge small bg-danger">{errors.lastname}</div>
                                </div>
                                <div className="col">
                                    <input type="tel" name="phone" placeholder="555 888 77 77" className="form-control form-control-sm"
                                        onChange={handleChange} value={values.phone} />
                                    <div className="badge small bg-danger">{errors.phone}</div>
                                </div>
                                <div className="col">
                                    <input type="email" name="email" placeholder="john@doe.com" className="form-control form-control-sm"
                                        onChange={handleChange} value={values.email} />
                                    <div className="badge small bg-danger">{errors.email}</div>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn btn-primary btn-sm me-2">
                                        <i className="fa fa-save me-2"></i>{mode === "add" ? "Create" : "Save"}
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => setMode("list")}>
                                        <i className="fa fa-times me-2"></i>Close
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }

            <div className="row mb-3">
                <div className="col">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Phone</th>
                                <th>E-Mail</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((cus, i) => {
                                    return <tr key={cus.id}>
                                        <td>
                                            <Link to={`/customers/${cus.id}`}>{cus.firstname} {cus.lastname}</Link>
                                        </td>
                                        <td>{cus.phone}</td>
                                        <td>{cus.email}</td>
                                        <td>
                                            {
                                                mode === "list" &&
                                                <span>
                                                    <i className="fa fa-edit text-secondary small me-2" data-id={cus.id} onClick={onClickEdit}></i>
                                                    <i className="fa fa-trash text-danger small" data-id={cus.id} onClick={onClickRemove}></i>
                                                </span>
                                            }
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Customers;