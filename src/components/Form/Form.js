import { Form as AntForm, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Form = ({ onAdded }) => {
    const [form] = AntForm.useForm();
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
    };

    const buttonItemLayout = {
        wrapperCol: { span: 14, offset: 4 },
    };

    const onFinish = (values) => {
        const file = values.upload[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            onAdded({ ...values, thumb: file.thumbUrl, upload: base64 });
            form.resetFields();
        };
        reader.readAsDataURL(file.originFileObj);
    };

    const onReset = () => {
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
        <div>
            <AntForm
                {...formItemLayout}
                layout="horizontal"
                form={form}
                name="control-hooks"
                onFinish={onFinish}
            >
                <AntForm.Item label="Title" name="title">
                    <Input placeholder="Enter Title" />
                </AntForm.Item>
                <AntForm.Item label="Description" name="description">
                    <Input placeholder="Enter Description" />
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
                    <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>Submit</Button>
                    <Button danger type="primary" htmlType="button" onClick={onReset}>
                        Cancel
                    </Button>
                </AntForm.Item>
            </AntForm>
        </div>
    );
}

export default Form;