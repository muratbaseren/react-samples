import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default () => {
    const router = useRouter();
    const { id, name } = router.query;
    // console.log(router);

    return (
        <Layout>
            <h1>Product</h1>
            <hr />
            id : {id} <br />
            name : {name}
        </Layout>
    );
};