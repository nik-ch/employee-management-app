import {Table, Spin, Button} from 'antd';
import {IEmployee} from '../interfaces';
import styles from './employee-list.module.css';

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
      sorter: (emp1: IEmployee, emp2: IEmployee) => emp1.first_name > emp2.first_name ? 1 : -1
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      sorter: (emp1: IEmployee, emp2: IEmployee) => emp1.last_name > emp2.last_name ? 1 : -1
    },
    {
      title: 'Office',
      dataIndex: ['office', 'name'],
      sorter: (emp1: IEmployee, emp2: IEmployee) => emp1.office.name > emp2.office.name ? 1 : -1
    },
    {
      title: 'Publisher',
      dataIndex: 'publisher',
      render: (text: string, record: IEmployee) => {
        return record.publisher ? record.publisher.name : ''
      }
    },
    {
      className: styles['action-col'],
      render: (text: string, record: IEmployee) => {
        return (
            <span onClick={() => props.onEditHandler(record)}>Edit</span>
        )
      }
    },
    {
      className: styles['action-col'],
      render: (text: string, record: IEmployee) => {
        return (
            <span onClick={() => props.onRemoveHandler(record.id)}>Remove</span>
        )
      }
    }
  ];

  return (
    <Spin spinning={props.isPending} wrapperClassName={styles.wrapper}>
      <Button type='primary' onClick={props.onAddHandler}>Add</Button>
      <Table dataSource={props.data} columns={columns} rowKey='id' pagination={false} />
    </Spin>
  );
}

export default EmployeesList;
