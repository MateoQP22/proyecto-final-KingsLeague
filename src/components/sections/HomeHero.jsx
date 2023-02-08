import useHome from "../../hooks/useHome";

const HomeHero = () => {
  const { homeData } = useHome();

  return (
    <>
      {homeData.map((element) => {
        const { id, title, price, description, image } = element;

        return (
          <>
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