import { Data1 } from "../data";

const DetailPage = {
    render(id) {
        const result = Data1.find((post) => post.id === id);
        return `
        <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" alt="" />
                <p>${result.desc}</p>
            </div>
        `;
    },
};
export default DetailPage;
