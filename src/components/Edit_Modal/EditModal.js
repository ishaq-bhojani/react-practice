import React from 'react';
import { Form as AntForm, Input, Modal, Button, Upload } from 'antd';
import Form from '../Form/Form'
import { UploadOutlined } from '@ant-design/icons';




const EditModal = ({ visible, modalInCardData }) => {
    const [form] = AntForm.useForm();
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
    };
    const buttonItemLayout = {
        wrapperCol: { span: 16, offset: 6 },
    };

    const onFinish = (values) => {
        // console.log('Success:', values);
        // modalInCardData.dispatch({ type: ACTION.EDIT_POST, payload: { values: values } })
        const file = values.upload[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            form.resetFields();
            modalInCardData.edit_handler({ values: values, thumb: file.thumbUrl, upload: base64 });
            form.resetFields();
        };
        reader.readAsDataURL(file.originFileObj);
        visible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        form.resetFields();
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <>

            <Modal
                title="Vertically centered modal dialog"
                centered
                form={form}
                visible={modalInCardData.check}
                // onOk={() => {visible(false)}}
                onCancel={() => visible(false)}
            >

                <AntForm
                    {...formItemLayout}
                    initialValues={{ remember: true, value: "ameen" }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <AntForm.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input your Title!' }]}
                    >
                        <Input />
                    </AntForm.Item>

                    <AntForm.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your Description!' }]}
                    >
                        <Input.Password />
                    </AntForm.Item>
                    <AntForm.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="long"
                    >
                        <Upload name="logo" listType="picture" accept="image/*" multiple={false}
                            maxCount={1}>
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </AntForm.Item>

                    <AntForm.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </AntForm.Item>
                </AntForm>
            </Modal>
        </>
    );
}

export default EditModal