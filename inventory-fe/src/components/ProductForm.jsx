import { useEffect, useState } from "react"
import ProductList from "./ProductList"

export default function ProductForm() {

    const [productsList, setProductsList] = useState([])

    //
    useEffect(() => { 
        const fetchProducts = async () => { 
            console.log("Fetching products...")
            const response = await fetch("http://localhost:8080/products")
            .then( (res) => res.json())
            .then( (data) => {
                console.log("Fetched data:", data) // This logs what you fetched
                setProductsList(data)
            })
            .catch( (e) => {
                console.error("Error fetching products:", e)
            })
        }  
        fetchProducts()
    }, [])

    const addProduct = (formData) => {
        const newProduct = formData.get("product")
        setProductsList( prevProductsList => [...prevProductsList, newProduct])
    }



    return (
        <main>
            <form action={addProduct} className="bg-blue-200" flex flex-col>
                <label htmlFor="">Products:</label>
                <input type="text" />
                <button>Add product</button>
            </form>
            <ProductList productsList={productsList}/>
        </main>
    )
}