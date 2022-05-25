import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectDate from "../../data/project-details2.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";
import { useRouter } from 'next/router'
import WorksDark from "../our-projects";

export const getStaticPaths =  () => {
 
   

    const paths = ProjectDate.map(work => {
        return {
            params:{
                projectId: work.id.toString()
            }
        }
    })
    return {
        paths, fallback:false
    }
}

export const getStaticProps =  (context) => {
    const projectId = context.params.projectId;
    
   

    return {
        props:{
            project : ProjectDate[projectId]
        }
    }

}

const ProjectDetails2Dark = ({project}) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const router = useRouter()
  const projectId = router.query.projectId
  console.log(projectId);

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
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={project} />
        <ProjectIntroduction projectIntroductionData={project.intro} />
        <ProjectGallery />
        <ProjectDescription projectDescriptionData={project.description} />
{/*         <ProjectVideo projectVideoDate={project} /> */}
{/*         <NextProject /> */}
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
