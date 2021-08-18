import {Table, Spin, Button} from 'antd';
import {IEmployee} from '../interfaces';

interface IEmployeesListProps {
  isPending: boolean;
  data: IEmployee[];
  onEditHandler: (e: IEmployee) => void;
  onRemoveHandler: (id: number) => void;
  onAddHandler: () => void;
}

const EmployeesList = (props: IEmployeesListProps) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id'
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
    },
    {
      title: 'Office',
      dataIndex: ['office', 'name'],
    },
    {
      title: 'Publisher',
      dataIndex: 'publisher',
      render: (text: string, record: IEmployee) => {
        return record.publisher ? record.publisher.name : ''
      }
    },
    {
      render: (text: string, record: IEmployee) => {
        return (
            <span onClick={() => props.onEditHandler(record)}>Edit</span>
        )
      }
    },
    {
      render: (text: string, record: IEmployee) => {
        return (
            <span onClick={() => props.onRemoveHandler(record.id)}>Remove</span>
        )
      }
    }
  ];

  return (
    <Spin spinning={props.isPending}>
      <Button type='primary' onClick={props.onAddHandler}>Add</Button>
      <Table dataSource={props.data} columns={columns} rowKey='id' pagination={false} />
    </Spin>
  );
}

export default EmployeesList;
