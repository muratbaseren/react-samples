import Layout from "../components/Layout";
import Link from "next/link";

export default () => {
    return (
        <Layout>
            <h1>Products Page</h1>
            <hr />
            <div>
                <ul>
                    <li>
                        <Link href="/product?id=100&name=apple" as="apple"><a>Apple</a></Link>
                    </li>
                    <li>
                        <Link href="/product?id=101&name=orange" as="orange"><a>Orange</a></Link>
                    </li>
                    <li>
                        <Link href="/product?id=102&name=banana" as="banana"><a>Banana</a></Link>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}