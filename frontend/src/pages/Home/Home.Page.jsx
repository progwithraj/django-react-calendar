import { Typography, Card, Space } from 'antd';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={1}>Welcome to Calendar App</Title>
      <Card>
        <Paragraph>
          This is a modern calendar application built with React and Ant Design.
          Manage your schedule with our intuitive interface and powerful features.
        </Paragraph>
      </Card>
    </Space>
  );
};

export default HomePage;