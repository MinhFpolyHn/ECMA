const Header = {
    render() {
        return /* html */`
        <div class="bg-orange-300">
            <ul class="flex">
            <li><a href="/" class="block px-4 py-5 hover:bg-blue-500 hover:text-white">Trang chủ</a></li>
            <li><a href="/about" class="block px-4 py-5 hover:bg-blue-500 hover:text-white">Tuyển sinh</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-blue-500 hover:text-white">Chương trình đào tạo</a></li>
            <li><a href="/no" class="block px-4 py-5 hover:bg-blue-500 hover:text-white">Tuyển dụng</a></li>
            </ul>
        </div>
        `;
    },
};
export default Header;
