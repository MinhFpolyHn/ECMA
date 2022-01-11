import { Data1 } from "../data";

const News = {
    render() {
        return /* html */`
        <h2>Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            ${Data1.map((post) => `
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
export default News;
