import Header from "../Header";
import { Link } from "react-router-dom";
import faker from "faker";
import { generateGuid } from "easy-guid-generator";

function Dashboard({ customers, customersState, tasks, tasksState }) {

    const onClickGenFakeCustomers = () => {
        if (customers.length === 0) {
            const list = [];

            for (let i = 0; i < 5; i++) {
                list.push({
                    id: generateGuid(false),
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    phone: faker.phone.phoneNumber(),
                    email: faker.internet.email()
                });
            }

            customersState([...customers, ...list]);
        }
    };

    const onClickGenFakeTasks = () => {
        if (tasks.length === 0) {
            const list = [];

            for (let i = 0; i < 30; i++) {
                list.push({
                    id: generateGuid(false),
                    summary: faker.lorem.sentence(3),
                    desc: faker.lorem.sentence(5),
                    customerid: faker.random.arrayElement(customers).id
                });
            }

            tasksState([...tasks, ...list]);
        }
    };


    return (
        <>
            <Header title="Dashboard" />

            <div className="row">
                <div className="offset-1 col-4">
                    <div className="card">
                        <img src="https://picsum.photos/id/1/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Customers</h5>
                            <p className="card-text">
                                Sistem de şu an da bulunan müşteri sayısı : <Link to="/customers">{customers.length}</Link>
                            </p>
                            <div className="text-center">
                                <button className="btn btn-primary btn-sm" onClick={onClickGenFakeCustomers}>Generate Fake Data</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-1 col-4">
                    <div className="card">
                        <img src="https://picsum.photos/id/1062/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tasks</h5>
                            <p className="card-text">
                                Sistem de şu an da bulunan görev sayısı : <Link to="/tasks">{tasks.length}</Link>
                            </p>
                            <div className="text-center">
                                <button className="btn btn-primary btn-sm" onClick={onClickGenFakeTasks}>Generate Fake Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;