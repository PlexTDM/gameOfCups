import "./Catalog.css";

const CatalogBuka = () => {
  const items = [
    {
      id: 1,
      name: 'Goblet "Fire and blood"',
      description: "black and white marble, black silver, red gemstones",
      price: "$238",
      image:
        "https://optim.tildacdn.com/tild3666-6632-4537-b739-336164346431/-/cover/566x740/center/center/-/format/webp/image20147.jpg",
    },
    {
      id: 2,
      name: 'Goblet "House Tyrrel"',
      description: "white marble, gold, emerald",
      price: "$148",
      image:
        "https://optim.tildacdn.com/tild6462-3263-4032-b265-656431366662/-/cover/566x878/center/center/-/format/webp/image20148.jpg",
    },
    {
      id: 3,
      name: 'Goblet "The Brothers of Night’s Watch"',
      description: "black marble, silver, black gemstone",
      price: "$129",
      image:
        "https://optim.tildacdn.com/tild3736-3364-4439-b930-666532323163/-/cover/566x586/center/center/-/format/webp/image20102.jpg",
    },
    {
      id: 4,
      name: 'Goblet “House Greyjoy”',
      description: "aquamarine marble, bronze blue gemstone",
      price: "$128",
      image: "https://optim.tildacdn.com/tild6334-3438-4564-b561-386162363339/-/cover/566x790/center/center/-/format/webp/Mask20group.jpg",
    },
    {
      id: 5,
      name: 'Goblet “House Stark”',
      description: "black marble, silver, green gemstone",
      price: "$154",
      image: "https://optim.tildacdn.com/tild3062-3035-4763-b063-613337653536/-/cover/566x740/center/center/-/format/webp/image20149.jpg",
    },
    {
      id: 6,
      name: 'Goblet “House Baratheon”',
      description: "white marble, gold, emerald",
      price: "$198",
      image:
        "https://optim.tildacdn.com/tild3666-6632-4537-b739-336164346431/-/cover/566x740/center/center/-/format/webp/image20147.jpg",
    },
    {
      id: 7,
      name: 'Goblet “We Do Not Sow”',
      description: "black and white marble, black silver, red gemstones",
      price: "$208",
      image:
        "https://optim.tildacdn.com/tild6462-3263-4032-b265-656431366662/-/cover/566x878/center/center/-/format/webp/image20148.jpg",
    },
    {
      id: 8,
      name: 'Goblet “House Targaryen”',
      description: "marble, bronze, rubies",
      price: "$250",
      image:
        "https://optim.tildacdn.com/tild3736-3364-4439-b930-666532323163/-/cover/566x586/center/center/-/format/webp/image20102.jpg",
    },
    {
      id: 9,
      name: 'Goblet “House Mormont”',
      description: "white and black marble, silver, red and yellow gemstone",
      price: "$150",
      image: "https://optim.tildacdn.com/tild3965-6530-4639-b064-303361303635/-/cover/566x740/center/center/-/format/webp/image20152.jpg",
    },
    {
      id: 10,
      name: 'Goblet “House Vellarion”',
      description: "aquamarine marble, gold, blue topazes",
      price: "$350",
      image: "https://optim.tildacdn.com/tild6132-3761-4730-b933-343639646234/-/cover/566x878/center/center/-/format/webp/image20153.jpg",
    },
    {
      id: 11,
      name: 'Goblet "House of Targaryen"',
      description: "marble gold, red and aquamarine onyx",
      price: "$150",
      image: "https://optim.tildacdn.com/tild3963-3930-4436-a661-633163326530/-/cover/566x586/center/center/-/format/webp/image20151.jpg",
    },
    {
      id: 12,
      name: 'Goblet “As High as Honor”',
      description: "stfu",
      price: "$292",
      image: "https://optim.tildacdn.com/tild6439-6661-4532-a538-663265396664/-/cover/566x790/center/center/-/format/webp/image20118.jpg",
    },
  ];


  const AddToCartButton = () => {
    return (
      <button className="add-to-cart-button">
        ADD TO CART
      </button>
    );
  };

  const SeeCatalog = () => {
    return (
      <button className="cart-button">
        SEE CATALOG
      </button>
    );
  };

  return (
    <div className="catalog-container">
      <div className="seeCatalog">
        <SeeCatalog />
        <span className="arrows">
          <img className="arrow-left" src="https://static.tildacdn.com/tild3461-3334-4835-b436-313435306632/arrow2.svg" alt="arrow left" />
          <img className="arrow-right" src="https://static.tildacdn.com/tild3461-3334-4835-b436-313435306632/arrow2.svg" alt="arrow right" />
        </span>

      </div>
      <div id="catalog-items" className="catalog-items">
        {items.map((item) => (
          <div key={item.id} className="catalog-item">
            <img
              src={item.image}
              alt={item.name}
              className="catalog-item-image"
            />
            <div className="line"> </div>
            <p className="title">{item.name}</p>
            <p className="desc">{item.description}</p>
            <div className="price-and-button">
              <span className="price">{item.price}</span>
              <AddToCartButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CatalogBuka;

