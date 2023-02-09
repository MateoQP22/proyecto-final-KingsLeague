import React, { useEffect, useState } from 'react';

const SearchComponent = () => {

  //hook state

  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");
  // traer los datos
  const URL = 'https://fakestoreapi.com/products'

  const ShowData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUser(data)
  }
  // función de busqueda

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target)
  }
  // método de filtrado -1
  let results = []
  if (!search) {
    results = users
  } else {
    results = users.filter((dato) => (
      dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    ))
  }

  // método de filtrado -2
  //const results = !search ? users : users.filter((dato => dato.title.toLowerCase().includes(search.toLocaleLowerCase())))

  useEffect(() => {
    ShowData()

  }, [])
  // renderizamos la vista
  return (
    <div>
      <input value={search} onChange={searcher} type="text" placeholder='Search' />
      <table className="table table-striped hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso">
            <th>Name</th>
            <th>UseName</th>

          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.title} </td>
              <td>{user.price} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default SearchComponent;