import React from "react";
import { IUser } from "../types/User";

interface UserTableProps {
  userData: IUser[];
  onConvert: Function;
}

const UserTable = ({ userData, onConvert }: UserTableProps) => {
  const handleConvertToXml = () => {
    onConvert();
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-4/6">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-gray-50 p-5">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                    >
                      Hobbies
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userData.map((user) => (
                    <tr key={user.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.hobbies.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end m-2">
              <button
                onClick={handleConvertToXml}
                className="px-4 py-2 rounded-full bg-blue-500 text-white"
              >
                Convert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
