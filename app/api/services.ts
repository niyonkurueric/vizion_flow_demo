import axios from "axios";

export const getCustomers = async () => {
  try {
    const response = await axios.get("https://my.api.mockaroo.com/customers?key=5b381a60");
    const customers = response.data;
    return customers;
  } catch (error) {
    console.error("getCustomers", error);
  }
};

export const getAnalytics = async () => {
  try {
    const response = await axios.get("https://my.api.mockaroo.com/customers?key=5b381a60");
    const analytics = response.data;
    return analytics;
  } catch (error) {
    console.error("getWebAnalytics", error);
  }
};
