import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card";
const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {/* gelen datayı card compenettine gönderiyoruz*/}
      {data.map((item,index) => (
        <Card {...item} key ={index} />
      ))}
    </div>
  );
};

export default Main;
