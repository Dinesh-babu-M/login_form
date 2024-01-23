import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  education,
  skills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4 text-center">Who I am !...</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="">
          <Col lg="12">
            <h2 className="about-title text-center">{dataabout.title}</h2>
            <p className="about-para1 text-center">{dataabout.aboutme}</p>
          </Col>
        </Row> 

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Row className=" sec_sp">
                <Col lg="12">
                  <h3 className="color_sec py-4 text-center">Education</h3>
                  <hr className="t_border my-4 ml-0 text-right" />
                </Col>
                <Col lg="11">
                  <table className="table caption-top">
                    <tbody>
                      {education.map((data, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">{data.title}</th>
                            <td>{data.name}</td>
                            <td>{data.where}</td>
                            <td>{data.date}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Col>
              </Row> 
            </div>

            <div class="col-sm">
              <Row className="sec_sp">
                <Col lg="12">
                  <h3 className="color_sec py-4 text-center">Skills</h3>
                  <hr className="t_border my-4 ml-0 text-right" />  
                </Col>

                <Col lg="12">
                    {skills.map((data, i) => {
                      return (
                        <div key={i}>
                          <h3 className="progress-title">{data.name}</h3>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{
                              width: `${data.value}%`,
                              }}
                            >
                              <div className="progress-value">{data.value}%</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Col>
              </Row>
            </div>
         </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
