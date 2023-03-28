import axios from "axios";
import { API_LINK } from "../constants/environment";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_LINK);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
