import CardStyle from "../scss/card.module.scss";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        const { comment, id, img, job, name } = item;
        return (
          <div key={id} className={CardStyle.card}>
            <h2>{name}</h2>
            <h5>{job}</h5>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div className={CardStyle.buttons}>
              <button className={CardStyle.small}>Small</button>
              <button className={CardStyle.large}>Large</button>
            </div>
          </div>
        );
      })}
    
    </div>
  );
};

export default Card;
