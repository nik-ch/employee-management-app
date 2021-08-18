import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import {IOffice, IOfficeStoreState} from '../interfaces';
import {OfficeAction} from '../office.actions';
import {SelectComponent} from '../../shared/select-component';
import {fetchOffices} from '../office.effects';
import {useMountEffect} from '../../hooks';

const mapStateToProps = ({office}: RootState) => {
    return {
        ...office
    };
};

type OfficesSelectFeatureProps = IOfficeStoreState & {
    dispatch: (action: OfficeAction) => void;
    onSelect: (o: IOffice | null) => void;
    value?: IOffice;
}

const OfficesSelectFeature = (props: OfficesSelectFeatureProps) => {
    const [offices, setOffices] = useState<IOffice[]>([]);
    const [selectedVal, setSelectedValue] = useState(1);

    useMountEffect(() => {
        fetchOffices(props.dispatch);
    });

    useEffect(() => {
        setOffices(props.data);
        // if value is given, we should not select first entity as default
        if (!props.value) {
            const firstOfficeInList = props.data.length ? props.data[0] : null;
            const defaultVal = !!firstOfficeInList ? firstOfficeInList.id : 1;
            setSelectedValue(defaultVal);
            props.onSelect(firstOfficeInList);
        }
    }, [props.data]);

    useEffect(() => {
        if (props.value) {
            setSelectedValue(props.value.id);
        }
    }, [props.value]);

    const onApply = (id: number) => {
        const office = offices.find(o => o.id === id);
        props.onSelect(office || null);
    };

    return (
        <SelectComponent onApply={onApply} data={offices} selectedVal={selectedVal} allowClear={false}/>
    );
}

export default connect(mapStateToProps)(OfficesSelectFeature);
