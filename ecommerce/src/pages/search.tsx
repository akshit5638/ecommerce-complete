import { useState } from "react";
import ProductCard from "../components/product-card";


const Search = () => {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [maxPrice, setMaxPrice] = useState(100000);
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);
    const addToCartHandler = () => { }
    const isnextpage = true;
    const isprevpage = true;
    return (
        <div className="product-search-page">
            <aside>
                <h2>Filters</h2>
                <div>
                    <h4>Sort</h4>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="">None</option>
                        <option value="asc">Price (Low to High)</option>
                        <option value="dsc">Price (High to Low)</option>
                    </select>
                </div>

                <div>
                    <h4>Max Price: {maxPrice || ""}</h4>
                    <input
                        type="range"
                        min={100}
                        max={100000}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </div>

                <div>
                    <h4>Category</h4>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">ALL</option>

                    </select>
                </div>
            </aside>
            <main>
                <h1>Products</h1>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="search-product-list">
                    <ProductCard productId='ldskfjds' name='random' price={234} stock={3} handler={addToCartHandler} photo='data:image/jpeg;base64,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' />
                </div>
                <article>
                    <button
                        disabled={!isprevpage}
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        Prev
                    </button>
                    <span>
                        {page} of {4}
                    </span>
                    <button
                        disabled={!isnextpage}

                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </article>

            </main>
        </div>
    )
}

export default Search