import TopBar from "./TopBar"
import ProductList from "./ProductList"
import ProductForm from "./ProductForm"

export default function Main() {
    return(
        <main>
            <TopBar />
            <ProductForm />
            <ProductList />
        </main>
    )
}