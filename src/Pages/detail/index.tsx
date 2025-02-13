import { BsCartPlus } from "react-icons/bs"

import { api } from "../../services/api";

import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProductsProps } from "../home";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";

export function Produto() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductsProps>();
    const { addItemCart } = useContext(CartContext);

    useEffect(() => {
        async function getProduct() {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data)
        }

        getProduct();
    }, [id])

    function handleAddItem(product: ProductsProps) {
        toast.success("Produto adicionado no carrinho");
        addItemCart(product);
        navigate("/cart");
    }

    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto my-6">
                {product && (
                    <section className="w-full">
                        <div className="flex flex-col lg:flex-row">
                            <img
                                className="flex-1 w-full max-h-72 object-contain"
                                src={product?.cover}
                                alt={product?.title}
                            />
                            

                            <div className="flex-1">
                                <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>

                                <p className="text-justify my-4">{product?.description}</p>

                                <strong className="text-zinc-700/90 text-xl">
                                    {product?.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}

                                    <button 
                                        onClick={() => handleAddItem(product)}
                                        className="bg-zinc-900 p-1 rounded ml-2 cursor-pointer">
                                        <BsCartPlus size={24} color="#FFF"/>
                                    </button>
                                </strong>
                            </div>
                        </div>
                    </section>
                )}
            </main>        
        </div>
    )
}