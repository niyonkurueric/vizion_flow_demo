import { getCustomers } from "@/api/services";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

const CustomerPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<Customer[]>({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const data = queryClient.getQueryData<Customer[]>(["customers"]);

  if (!data) return null;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-medium mb-2">Customers</h2>
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {data.map((customer, index) => (
              <tr key={customer.id}>
                <td>{index + 1}</td>
                <td>
                  {customer.first_name} {customer.last_name}
                </td>
                <td>{customer.email}</td>
                <td>{customer.gender}</td>
                <td>{dayjs(customer.signup_date).format("DD MMMM YYYY")}</td>
                <td>{dayjs(customer.last_activity).format("DD MMMM YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HydrationBoundary>
  );
};
export default CustomerPage;
