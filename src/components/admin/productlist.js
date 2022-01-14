import { Table } from "../../data";

const AdminProductList = {
    render() {
        return /* html */`
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="border shadow rounded px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-400">STT</th>
                <th scope="col" class="border shadow rounded px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-400">Hình</th>
                <th scope="col" class="border shadow rounded px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-400">title</th>
                <th scope="col" class="border shadow rounded px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-400">EDIT</th>
                <th scope="col" class="border shadow rounded px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-400">DELETE</th>
              </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            ${Table.map((infor) => `
                <tr>
                <td class="border shadow rounded px-1 py-4 whitespace-nowrap bg-[#99FF00]">${infor.id}</td>
                <td class="border shadow rounded px-1 py-4 whitespace-nowrap bg-[#99FF00]">
                    <img class="h-10 w-10 rounded-full" src="${infor.img}" alt="">
                </td>
                <td class="border shadow rounded px-6 py-4 whitespace-nowrap bg-[#99FF00]">${infor.title}</td>
                <td class="px-4 py-4">
                    <a href="/admin/products/${infor.id}/edit" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Edit</a>
                </td>
                <td class = "px-4 py-4">
                    <a href="" class="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Delete</a>
                </td>
              </tr>
            `).join("")}
          </tbody>
     </table>
        `;
    },
};
export default AdminProductList;
