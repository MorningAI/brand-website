/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Projects from "../../data/sections/projects.json"

export const getStaticProps = () => {
    return {
      props:{
        data: Projects
      }
    }
}

const WorksStyle2 = ({ grid, hideFilter, filterPosition,data }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  // console.log(data);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".brand">Branding</span>
                <span data-filter=".dev">Development</span>
                <span data-filter=".graphic">Creative</span>
              </div>
            </div>
          )}

          <div className="gallery full-width">
          
              {Projects.map((el,i)=>(  <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items wow fadeInUp `+el.class}
              data-wow-delay=".4s"
              key={i}
            >
              <div className="item-img">
                <Link href={`/works/0`}>
                  <a className="imago wow">
                    <img src={el.cover_image} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>{el.title} </h6>
                <span>
                  {el.tags.map(tag=>(<Link href="/works3/works3-dark">{tag}</Link>))}
    
                </span>
              </div>
            </div>
))}
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
