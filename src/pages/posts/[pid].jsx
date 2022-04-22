import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/blog-details";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import { useRouter } from 'next/router'
const BlogDetailsDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const router = useRouter()
  const pid = router.query.pid 
  const [data,setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false)


  React.useEffect(() => {
    setLoading(true)
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    fetch('https://dev.to/api/articles/'+pid)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
      console.log(data);
    })
  }, [navbarRef]);

  if (isLoading) return <DarkTheme><Navbar nr={navbarRef} lr={logoRef} /> <p>Loading...</p></DarkTheme>
  if (!data) return <DarkTheme><Navbar nr={navbarRef} lr={logoRef} /><p>No profile data</p></DarkTheme>

  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title={"Blog Post"}
        paragraph="All the most current news and events of our creative team."
      />
          <BlogDetails blog={"blog"} post={data} />
          <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
