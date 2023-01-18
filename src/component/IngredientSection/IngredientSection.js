import styles from "./IngredientSection.module.css";
import ServiceCard from "./ServiceCard";
import useScroll from "../hooks/useScroll";

function IngredientSection() {
  const scrollTo = useScroll();
  const ingredients = [
    {
      serviceNo: "s001",
      title: "UX design",
      image: "UX_design-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
    {
      serviceNo: "s002",
      title: "UI design",
      image: "UI_design-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
    {
      serviceNo: "s003",
      title: "Website Development",
      image: "website_dev-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
    {
      serviceNo: "s004",
      title: "Mobile APP Development",
      image: "mobile_app_dev-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
    {
      serviceNo: "s005",
      title: "Ecommerce",
      image: "ecommerce-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
    {
      serviceNo: "s006",
      title: "Customer Loyalty",
      image: "customer_loyalty-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
    {
      serviceNo: "s007",
      title: "Degital Transformation",
      image: "digital_transformation-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
    {
      serviceNo: "s008",
      title: "Degital Margeting",
      image: "digital_marketing-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
    {
      serviceNo: "s009",
      title: "Branding",
      image: "branding-01.png",
      content:
        "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    },
  ];
  const ingredientContent = ingredients.map((ing) => (
    <ServiceCard key={ing.serviceNo} service={ing} />
  ));
  return (
    <div id="ingredientSection" className={styles.ingredientSection__contener}>
      <header className={styles.serviceIntro__box}>
        <h3 id="ingredient" className={styles.heading}>
          Our Ingredient
        </h3>
        <p className={styles.intro}>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </p>
        <button className={styles.btn__ourService}>Our survices</button>
      </header>
      <main
        id="serviceDetail__box"
        className={`${styles.serviceDetail__box} serviceDetail__box hidden`}
      >
        {ingredientContent}
      </main>
      <a
        id="link__ingredient"
        className={styles.link__ingredient}
        href="#heroSection"
        onClick={scrollTo.bind(null, "#heroSection")}
      >
        View more digisalad's ingredients
      </a>
    </div>
  );
}

export default IngredientSection;
