import { Layout } from 'antd'
import Header from './components/Header'
import Sider from './components/Sider'
import Content from './components/Content'
import './style/common.scss'

function App() {
  return (
    <div>
      <Layout className="container">
        <Header/>
        <Layout>
          <Sider/>
          <Content/>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
