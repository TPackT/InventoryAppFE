export default function ProductList(props) {

    const productsList = props.productsList

    const productListItems = productsList.map(
        (product) => {
            return (
                <li className="flex gap-4">
                    <span className="w-10">{product.id}</span>
                    <span className="w-120">{product.name}</span>
                    <span className="w-48">{product.desc}</span>
                    <span className="w-20">{product.size}</span>
                    <span className="w-20">{product.price}</span>
                    <span className="w-20">{product.quantity}</span>
                    <button className="mr-5">Detail</button>
                </li>
                )
        }

    )


    return (
        <section className="">
            <li className="flex gap-4">
                    <span className="w-10">ID</span>
                    <span className="w-32">Name</span>
                    <span className="w-48">Desc</span>
                    <span className="w-20">Size</span>
                    <span className="w-20">Price</span>
                    <span className="w-20">Quantity</span>
                    <span className="mr-5">Action</span>
            </li>
        
            <ul className="product-list">
                {productListItems}
                

                
                
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
