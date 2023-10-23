import "./BlogItem.css";
import { Link, NavLink } from "react-router-dom";
const BlogItem = (props) => {
  let item = props.artikel;
  console.log(item);
  return (
    <>
      <article>
        <img src={props.artikel.img_url} alt={props.artikel.title} />
        <h3>{props.artikel.title}</h3>
        <NavLink to={`/artikel/${item.id}`}> Read more</NavLink>
      </article>
    </>
  );
};

export default BlogItem;
