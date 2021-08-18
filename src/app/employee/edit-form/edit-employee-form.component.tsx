import {Form, Modal, Input} from 'antd';
import {IEmployee} from '../interfaces';
import OfficesSelectFeature from '../../office/offices-select-feature/offices-select.feature';
import PublishersSelectFeature from '../../publisher/publishers-select-feature/publishers-select.feature';
import {useEffect} from 'react';
import {IOffice} from '../../office/interfaces';
import {IPublisher} from '../../publisher/interfaces';

interface IEditEmployeeProps {
    visible: boolean;
    onApply: (e: IEmployee) => void;
    onCancel: () => void;
    editableEmployee: IEmployee | null;
}

export default function EditEmployeeFormComponent(props: IEditEmployeeProps) {

    const [form] = Form.useForm();

    useEffect(() => {
        // update current form with given entity
        form.resetFields();
        const editEntity = props.editableEmployee;
        if (editEntity) {
            Object.keys(editEntity).forEach(key => {
                form.setFieldsValue({[key]: (editEntity as any)[key]})
            });
        }
        console.log(form.getFieldsValue());
    }, [props.editableEmployee]);

    const onSave = async () => {
        try {
            const entity = await form.validateFields();
            props.onApply(entity);
        } catch(errorInfo) {
            // validation messages are shown by antd framework
        }
    }

    const onOfficeChanged = (o: IOffice | null) => {
        form.setFieldsValue({office: o});
    }

    const onPublisherChanged = (p: IPublisher | null) => {
        form.setFieldsValue({publisher: p});
    }

    const formItemLayout = {
        labelCol: {span: 6},
        wrapperCol: {span: 18}
    };

    return (
        <Modal visible={props.visible} onCancel={props.onCancel} onOk={onSave} okText="Save">
            <Form {...formItemLayout} form={form}>
                <Form.Item label="Id" name="id">
                    <span>{props.editableEmployee?.id}</span>
                </Form.Item>
                <Form.Item
                    label="First name"
                    name="first_name"
                    rules={[
                        {required: true, message: 'Please enter first name'},
                        {max: 20, message: 'First name can not be longer that 20 symbols'}
                    ]}
                >
                    <Input placeholder={'Please enter a name'} />
                </Form.Item>
                <Form.Item
                    label="Last name"
                    name="last_name"
                    rules={[
                        {required: true, message: 'Please enter last name'},
                        {max: 20, message: 'Last name can not be longer that 20 symbols'}
                    ]}
                >
                    <Input placeholder={'Please enter a last name'} />
                </Form.Item>
                <Form.Item
                    label="Office"
                    name="office"
                    rules={[{required: true, message: 'Please select an office'}]}
                >
                    <OfficesSelectFeature onSelect={onOfficeChanged} />
                </Form.Item>
                <Form.Item label="Publisher" name="publisher">
                    <PublishersSelectFeature onSelect={onPublisherChanged} />
                </Form.Item>
            </Form>
        </Modal>
    );
}
