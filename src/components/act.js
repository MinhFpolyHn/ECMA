import { Data2 } from "../data";

const Acts = {
    render() {
        return /* html */`
        <div class="uppercase font-bold text-xl my-5 text-blue-800">
        <h2>Hoat động học tập</h2>
        </div>
        <div class="grid grid-cols-3 gap-8">
            ${Data2.map((post) => `
            <div class="border border-gray-800">
                <img class="px-5 py-3" src="${post.img}" alt="" />
                <h3 class="font-medium text-center text-emerald-600"><a href="">${post.title}</a></h3>
                <p class="tracking-tighter list-inside">${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        
        `;
    },
};
export default Acts;
