import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/blog-details";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

export const getStaticPaths = async () => {
  const res = await fetch('https://dev.to/api/articles/me/published', {'headers':{
    'api-key': 'qfTdvkmUyqPEjYC5CdaDBfw2'
  }});
  const data = await res.json();
  
  const paths = data.map(post => {
    return {
      params: {pid : post.id.toString()}
    }
  });
  return {
    paths, fallback: false
  }
}


export const getStaticProps = async (context)=>{
  const pid = context.params.pid;
  const res = await fetch('https://dev.to/api/articles/'+pid);
  const data = await res.json();

  return {
    props:{
      post : data
    }
  }
}



const BlogDetailsDark = ({post}) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
 

  React.useEffect(() => {
    
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
  
  }, [navbarRef]);

 
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
          <BlogDetails blog={"blog"} post={post} />
          <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
