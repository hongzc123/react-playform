import React, { memo, useState } from 'react'
import { Card, Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd'

export default memo(function Index() {
    // const colums = [
    //     {
    //         title: '姓名',
    //         dataIndex: 'name',
    //         key: 'name'
    //     },
    //     {
    //         title: '年龄',
    //         dataIndex: 'age',
    //         key: 'age'
    //     },
    //     {
    //         title: '地址',
    //         dataIndex: 'address',
    //         key: 'address'
    //     }
    // ]
    // const dataSource = [
    //     {
    //         key: '1',
    //         name: '夏沫烟雨',
    //         age: 18,
    //         address: '杭州市西湖区123'
    //     },
    //     {
    //         key: '2',
    //         name: '夏沫烟雨2',
    //         age: 13,
    //         address: '杭州市西湖区321'
    //     },
    //     {
    //         key: '3',
    //         name: '夏沫烟雨3',
    //         age: 15,
    //         address: '杭州市西湖区123'
    //     },
    //     {
    //         key: '4',
    //         name: '夏沫烟雨4',
    //         age: 19,
    //         address: '杭州市西湖区23'
    //     },
    // ]
    const originData = [];

    for (let i = 0; i < 100; i++) {
        originData.push({
            key: i.toString(),
            name: `Edrward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
        });
    }

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });


    return (
        <div>
            {/* <Card title="基础表格" style={{ width: '500px' }}>
                <Table columns={colums} dataSource={dataSource} bordered />
                <Table columns={colums} dataSource={dataSource} bordered pagination={false} />
            </Card> */}
            <Card style={{ width: '1000px' }}>
                <Form form={form} component={false}>
                    <Table
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered
                        dataSource={data}
                        columns={mergedColumns}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: cancel,
                        }}
                    />
                </Form>
            </Card>
        </div>
    )
})

