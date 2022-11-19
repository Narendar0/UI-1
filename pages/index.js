import styles from "../styles/Home.module.css";
import { Card } from "antd";
import { Row, Col } from "antd";
import { Typography } from "antd";




const { Text } = Typography;



export default function Home() {
  return (
    <div >
      <section className={styles.color} >
        
        {/* Top Left Image Portion Starts Here */}
        <div>
          <img className={styles.imag} src="/frame2.png" />
        </div>



{/* image and content portion starts here */}


     <Row gutter={[48, 16]} align="middle">
        <Col gutter={[48, 16]} >
          <img className={styles.App} src="/ceo.png" />
        </Col>

        
        <Col className={styles.content} gutter={[48, 16]}>
          <h1>Mr.V.Jaganathan</h1>
          <h2>Chairman &amp; CEO</h2>
          <br/>
          <p className={styles.inContent}>
            A doyen of the insurance industry with <br />
            50 years of experience in the insurance sector.He
            <br />
            has held various positions of <br />
            authority,including that of the Chairman cum <br />
            Managing Director of one india's largest Public
            <br />
            Sector Insurance Companies
          </p>
        </Col>
        </Row>

       

        {/* Down Right Image Portion Starts Here */}
        <div>
          <img className={styles.imeg} src="/frame2.png" />
        </div>
      <br />
      

      </section>










     {/* sidebar portion starts here */}
      
      <div className={styles.sidebar}>
          <p >
            About Us
            <br />
            Why Choose Us
            <br />
            <span className={styles.sidebarcolor}>Board Of Director</span>
            <br />
            Key Management Person
            <br />
            Citizen's Charter
            <br />
            Others
            <br />
          </p>
        </div>

      <h1 className={styles.downheading}>Our Team Members</h1>




















      {/* Here the Card portion starts */}

     <div className={styles.container}>
     <Row gutter={[40, 32]} className={styles.cards}>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}  >
          <Card
            hoverable
            className={styles.card}
            bordered={false}
            cover={<img src="/shape image 1.png" />}  >
            <Text strong>Dr. S. Prakash</Text>
            <p>Managing Director</p>
            <p>
              As a Manager of the Star Health Insurnace. he is making
              commendable contributions for the progress
            </p>
            <button>Read more</button>
          </Card>
        </Col>

        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card
            hoverable
            className={styles.card}
            bordered={false} 
            cover={<img src="/shape image 2.png" />}
          >
            <Text strong>Dr. S. Prakash</Text>
            <p>Managing Director</p>
            <p>
              As a Manager of the Star Health Insurnace. he is making
              commendable contributions for the progress
            </p>
            <button>Read more</button>
          </Card>
        </Col>

        <Col  xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card
            className={styles.card}
            hoverable
            bordered={false}
            cover={<img src="/shape image 3.png" />}
          >
            <Text strong>Dr. S. Prakash</Text>
            <p>Managing Director</p>
            <p>
              As a Manager of the Star Health Insurnace. he is making
              commendable contributions for the progress
            </p>
            <button>Read more</button>
          </Card>
        </Col>

        <Col  xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card
            hoverable
            className={styles.card}
            bordered={false} 
            cover={<img src="/shape image 1.png" />}
          >
            <Text strong>Dr. S. Prakash</Text>
            <p>Managing Director</p>
            <p>
              As a Manager of the Star Health Insurnace. he is making
              commendable contributions for the progress
            </p>
            <button>Read more</button>
          </Card>
        </Col>

        <Col  xs={{ span: 24 }} lg={{ span: 8 }} >
          <Card
            hoverable
            bordered={false} 
            className={styles.card}
            cover={<img src="/shape image 2.png" />}
          >
            <Text strong>Dr. S. Prakash</Text>
            <p>Managing Director</p>
            <p>
              As a Manager of the Star Health Insurnace. he is making
              commendable contributions for the progress
            </p>
            <button>Read more</button>
          </Card>
        </Col>

        <Col  xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card
            hoverable={false} 
            bordered={false} 
            className={styles.card}
            cover={<img src="/shape image 3.png" />}
          >
            <Text strong>Dr. S. Prakash</Text>
            <p>Managing Director</p>
            <p>
              As a Manager of the Star Health Insurnace. he is making
              commendable contributions for the progress
            </p>
            <button>Read more</button>
          </Card>
        </Col>
      </Row>
     </div>
    </div>
  );
}
