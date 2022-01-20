import { useParams } from "react-router-dom";

function CustomerTasks({ customers, tasks }) {
    const { id } = useParams();
    const customer = customers.find((item) => item.id === id);
    const filteredTasks = tasks.filter((item) => item.customerid === id);

    return (
        <>
            <div className="row">
                <div className="col">
                    <h5>Tasks of {customer.firstname} {customer.lastname} ({filteredTasks.length})</h5>
                    <hr />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Summary</th>
                                <th>Description</th>
                                <th>Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredTasks.map((task, i) => {
                                    return <tr key={task.id}>
                                        <td>{task.summary}</td>
                                        <td>{task.desc}</td>
                                        <td>{customer.firstname} {customer.lastname}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CustomerTasks;