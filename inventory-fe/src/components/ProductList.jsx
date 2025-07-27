export default function ProductList() {
    return (
        <section className="">
        
            <ul className="product-list">
                <li className="flex gap-4">
                    <span className="w-10">ID</span>
                    <span className="w-32">Name</span>
                    <span className="w-48">Desc</span>
                    <span className="w-20">Size</span>
                    <span className="w-20">Price</span>
                    <span className="w-20">Quantity</span>
                    <span className="mr-5">Action</span>
                </li>
                <li className="flex gap-4">
                    <span className="w-10">1</span>
                    <span className="w-32">Coca-Cola</span>
                    <span className="w-48">Whatever</span>
                    <span className="w-20">500ml</span>
                    <span className="w-20">30</span>
                    <span className="w-20">2</span>
                    <button>Detail</button>
                </li>
                <li className="flex gap-4">
                    <span className="w-10">2</span>
                    <span className="w-32">Fanta</span>
                    <span className="w-48">Whatever</span>
                    <span className="w-20">500ml</span>
                    <span className="w-20">30</span>
                    <span className="w-20">2</span>
                    <button>Detail</button>
                </li>
                
            </ul>
        </section>
        
    )
}
