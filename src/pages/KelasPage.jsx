import { Container, Row, Col } from "react-bootstrap"
import {semuaKelas} from "../data/index"
import FaqComponent from "../components/faqComponent"

const KelasPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animated__delay-1s">Semua kelas</h1>
              <p className="text-center animate__animated animate__fadeInUp animated__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
          {semuaKelas.map((kelas) => {
              return(
                <Col key={kelas.id} className="shadow-sm rounded-1" data-aos="fade-up" data-aos-durationa="1000" data-aos-delay={kelas.delay}>
                  <img src={kelas.image} alt="gambar kelas" className="mb-5 rounded-top" />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-1">{kelas.buy}</button>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  )
}

export default KelasPage