import axios from "axios";
import IDataList from "../model/IDataList";

const getDataFromServer = async () => {
  const response = await axios.get<IDataList[]>(`http://localhost:3001/items`);
  return response.data;
};

const pushDataFromUser = async (formData: Omit<IDataList, "id">) => {
  const response = await axios.post<IDataList>(
    `http://localhost:3001/items`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export { getDataFromServer, pushDataFromUser };
