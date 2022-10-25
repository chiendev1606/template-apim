import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Popover, Space } from 'antd';
import React, { useState } from 'react';
import './filter-box.scss';

interface FilterBoxProps {
  dropdownRender: JSX.Element;
}

const FilterBox: React.FC<FilterBoxProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const { dropdownRender } = props;

  return (
    <div className="filter-box">
      <Input
        className="filter-box__input"
        prefix={
          <Space>
            <Popover
              placement="bottomLeft"
              visible={visible}
              onVisibleChange={(visible: boolean) => setVisible(visible)}
              content={dropdownRender}
              trigger="click"
            >
              <Button type="link" className="color-grey" onClick={() => setVisible(true)} style={{ padding: '0px' }}>
                <span>Lọc</span>
                <span style={{ fontSize: '8px', marginLeft: '5px' }}>
                  <DownOutlined />
                </span>
              </Button>
            </Popover>
            <Divider type="vertical" className="bg-color-grey" />
            <span>
              <SearchOutlined />
            </span>
          </Space>
        }
        placeholder="Tìm kiếm"
        suffix={
          <Button type="primary" className="warehouse__btn warehouse__btn--filter border-none">
            Tìm
          </Button>
        }
      />
    </div>
  );
};

export default FilterBox;
