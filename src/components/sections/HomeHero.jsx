import useHome from "../../hooks/useHome";

const HomeHero = () => {
  const { homeData } = useHome();
  const [search, setSearch] = useState("");

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


  return (
    <>
      {homeData.map((element) => {
        const { id, title, price, description, image } = element;

        return (
          <>
            <input value={search} onChange={searcher} type="text" placeholder='Search' />

            <li key={element.id}>
              <h1>{id} </h1>
              <h2>{title}</h2>
              <h3>precio: {price} </h3>
              <p>descripción: {description} </p>
              <img src={image} alt="" />
            </li>
          </>
        )
      })}

    </>
  );
};

export default HomeHero;