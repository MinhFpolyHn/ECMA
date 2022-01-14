import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import CallPage from "./pages/called";
import DetailPage from "./pages/detail";
import AdminProductPage from "./pages/admin/adminproduct";
import Signup from "./pages/signup";
// import AdminProductEdit from "./pages/admin/productEdit";
import Signin from "./pages/signin";
import EditProduct from "./pages/admin/editproduct";
import Dashboard from "./pages/admin/dashboardPage";

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
    "/products/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(+id));
    },
    "/admin/products": () => {
        print(AdminProductPage.render());
    },
    "/admin/Dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/products/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditProduct.render(id));
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
});
router.resolve();
