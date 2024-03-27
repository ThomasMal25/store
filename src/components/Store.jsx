import React, { useState } from 'react';
import Cart from './Cart';
import Product from './Product';
import NavBar from './NavBar';
function Store(props) {
  const [id, setId] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [cartId, setCartID] = useState(null);
  const [count, setCount] = useState(0);

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  let filteredProducts = props.data;
  if (categoryFilter) {
    filteredProducts = props.data.filter(
      (item) => item.category === categoryFilter
    );
  }

  const handleCart = (id, title, price) => {
    setCartID(id);
    console.log(title);

    id === cartId ? <Cart title={title} price={price} /> : <Cart />;
  };

  return (
    <div className="bg-white">
      <NavBar count={count} />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>
        <div className="filter-buttons">
          {/* Extract unique categories */}
          <select
            className="filter-dropdown"
            onChange={(e) => handleCategoryFilter(e.target.value)}
          >
            <option value="">All</option>{' '}
            {Array.from(new Set(props.data.map((item) => item.category))).map(
              (category) => (
                <option key={category} value={category}>
                  {category.toUpperCase()}
                </option>
              )
            )}
          </select>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                <img
                  src={item.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{item.title}</h3>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => setId(item.id)}
                  >
                    Details
                  </button>
                  {id === item.id ? (
                    <Product
                      description={item.description}
                      title={item.title}
                      id={item.id}
                      setCount={setCount}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Store;
