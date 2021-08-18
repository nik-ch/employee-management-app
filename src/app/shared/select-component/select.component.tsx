import {Select} from 'antd';
import {useEffect, useState} from 'react';
const {Option} = Select;

interface ISelectComponentProps<T> {
    onApply: (id: number) => void;
    data: T[];
    selectedVal?: number | null;
    allowClear: boolean;
}

interface ISelectValue {
    id: number;
    name: string;
}

export function SelectComponent<T extends ISelectValue>(props: ISelectComponentProps<T>) {
    const [selectList, setSelectList] = useState<JSX.Element[]>([]);
    const [value, setValue] = useState(1);

    useEffect(() => {
        const newList = props.data.map(i => {
            return (<Option selected={true} key={i.id} value={i.id}>{i.name}</Option>);
        });
        setSelectList(newList);
    }, [props.data]);

    useEffect(() => {
        setValue(props.selectedVal as number);
    }, [props.selectedVal]);

    const handleChange = (id: number) => {
        props.onApply(id);
    }

    return (
        <Select value={value} onChange={handleChange}>{selectList} allowClear={props.allowClear}</Select>
    );
}


