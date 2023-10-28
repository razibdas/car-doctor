import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            <h2>Book Service</h2>
        </div>
    );
};

export default CheckOut;