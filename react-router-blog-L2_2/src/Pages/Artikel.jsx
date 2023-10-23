import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Artikel.css";
const Artikel = () => {
  const { id } = useParams();
  let blogData = [
    {
      id: 0,
      title: "My Pets",
      published_date: "18.03.21",
      author: "Jane Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
      img_url:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",
    },
    {
      id: 1,
      title: "My Plants",
      published_date: "5.06.21",
      author: "John Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
      img_url:
        "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
    },
    {
      id: 2,
      title: "My Work",
      published_date: "20.11.21",
      author: "Frida",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
      img_url:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1972&q=80",
    },
    {
      id: 3,
      title: "My Hobbys",
      published_date: "02.12.21",
      author: "Pete",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi officiis quisquam reprehenderit odit ipsam natus quia sed neque sunt eligendi laboriosam, culpa, modi dolorum consequuntur quo. Distinctio, quisquam aspernatur?",
      img_url:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 4,
      title: "Social Media",
      published_date: "15.02.21",
      author: "Ann",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi officiis quisquam reprehenderit odit ipsam natus quia sed neque sunt eligendi laboriosam, culpa, modi dolorum consequuntur quo. Distinctio, quisquam aspernatur?",
      img_url:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    },
    {
      id: 5,
      title: "Coding Life",
      published_date: "06.05.21",
      author: "Alex",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi officiis quisquam reprehenderit odit ipsam natus quia sed neque sunt eligendi laboriosam, culpa, modi dolorum consequuntur quo. Distinctio, quisquam aspernatur?",
      img_url:
        "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    },
  ];
  const found = blogData.find((elm) => elm.id == id);
  console.log(found.title);

  return (
    <>
      <Navbar />
      <section className="artikel-info">
        <img src={found.img_url} alt={found.title} />
        <div className="info m-t-30">
          <div className="flex">
            <h2>{found.title}</h2>
            <p>{found.published_date}</p>
          </div>
          <p className="m-t-30">{found.description}</p>
          <h3 className="m-t-30">{found.author}</h3>
        </div>
      </section>
    </>
  );
};

export default Artikel;
