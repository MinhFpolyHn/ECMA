import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import CallPage from "./pages/called";
import DetailPage from "./pages/detail";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/no": () => {
        print(CallPage.render());
    },
    "/product/:id": (Data1) => {
        const { id } = Data1;
        print(DetailPage.render(+id));
    },
    // "/product/:id": ({ data }) => {
    //     const { id } = data;
    //     print(DetailPage.render(id));
    // },
});
router.resolve();
