import {Form, Modal, Input} from 'antd';
import {IEmployee} from '../interfaces';
import OfficesSelectFeature from '../../office/offices-select-feature/offices-select.feature';
import PublishersSelectFeature from '../../publisher/publishers-select-feature/publishers-select.feature';

interface IEditEmployeeProps {
    visible: boolean;
    onApply: (e: IEmployee) => void;
    onCancel: () => void;
    editableEmployee: IEmployee | null;
}

export default function EditEmployeeFormComponent(props: IEditEmployeeProps) {
    const formItemLayout = {
        labelCol: {span: 6},
        wrapperCol: {span: 18}
    };
    return (
        <Modal visible={props.visible} onCancel={props.onCancel} onOk={() => props.onApply({} as IEmployee)}>
            <Form {...formItemLayout}>
                <Form.Item label="Id">
                    <span>{props.editableEmployee?.id}</span>
                </Form.Item>
                <Form.Item label="First name">
                    <Input placeholder={'Please enter a name'} />
                </Form.Item>
                <Form.Item label="Last name">
                    <Input placeholder={'Please enter a last name'} />
                </Form.Item>
                <Form.Item label="Office">
                    <OfficesSelectFeature />
                </Form.Item>
                <Form.Item label="Publisher">
                    <PublishersSelectFeature />
                </Form.Item>
            </Form>
        </Modal>
    );
}
