import { Layout, Row, Col } from 'antd'
import Header from './components/Header'
import Sider from './components/Sider'
import Content from './components/Content'
import './style/common.scss'
import './style/public.scss'
import { renderRoutes } from 'react-router-config'
import routes from './router'

function App() {
  return (
    <div>
      <Row className="container">
        <Col className='nav-left' span="4">
          <Sider />
        </Col>
        <Col className='main' span="20">
          <Header />
          <Col className='content'>
            {/* <Content /> */}
            {renderRoutes(routes)}
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default App;
