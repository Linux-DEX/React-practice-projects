import React, { useState } from 'react'
import TabOne from "../components/TabOne"
import Tabtwo from "../components/Tabtwo"
import Tabthree from "../components/Tabthree"
import "./Home.css";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');
  
  const renderTabContent = () => {
    switch (selectedTab) {
      case 'tab1':
        return <TabOne />;
      case 'tab2':
        return <Tabtwo />;
      case 'tab3':
        return <Tabthree />;
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <>
    <div className='Home'>
      <h1>Tabs Example using switch </h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: 10 }}>
            <button
              onClick={() => setSelectedTab('tab1')}
              className={selectedTab === 'tab1' ? 'active' : ''}
              style={{ padding: '10px', cursor: 'pointer' }}
            >
              Tab 1
            </button>
          </li>
          <li style={{ marginRight: 10 }}>
            <button
              onClick={() => setSelectedTab('tab2')}
              className={selectedTab === 'tab2' ? 'active' : ''}
              style={{ padding: '10px', cursor: 'pointer' }}
            >
              Tab 2
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedTab('tab3')}
              className={selectedTab === 'tab3' ? 'active' : ''}
              style={{ padding: '10px', cursor: 'pointer' }}
            >
              Tab 3
            </button>
          </li>
        </ul>
      </nav>

      {renderTabContent()}
    </div>
    </>
  );
}

export default Home