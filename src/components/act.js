import { Data2 } from "../data";

const Acts = {
    render() {
        return /* html */`
        <h2>Hoat động học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            ${Data2.map((post) => `
            <div>
                <img src="${post.img}" alt="" />
                <h3><a href="">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        
        `;
    },
};
export default Acts;
