// gelen datayı parametre olarak gönderiyoruz
const Card = (data) => {
  // gelen veriyi açıyoruz destruction
  const { title, image, desc, link } = data;
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <img src={image} alt="img1" />
      <div className="card-bottom">
        <p> {desc}</p>
      </div>
      <div className="link">
        <a href={link} target="_blank" rel="noopener noreferrer" class="button">
          Detay
        </a>
      </div>
    </div>
  );
};

export default Card;
