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
    onSelect: (o?: IOffice) => void;
    value?: IOffice;
}

const OfficesSelectFeature = (props: OfficesSelectFeatureProps) => {
    const [offices, setOffices] = useState<IOffice[]>([]);
    const [selectedValue, setSelectedValue] = useState(1);

    useMountEffect(() => {
        fetchOffices(props.dispatch);
    });

    useEffect(() => {
        setOffices(props.data);
        // if value is given, we should not select first entity as default
        if (!props.value) {
            const firstOfficeInList = props.data.length ? props.data[0] : undefined;
            const defaultVal = !!firstOfficeInList ? firstOfficeInList.id : 1;
            setSelectedValue(defaultVal);
            props.onSelect(firstOfficeInList);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.data]);

    useEffect(() => {
        if (props.value) {
            setSelectedValue(props.value.id);
        }
    }, [props.value]);

    const onApply = (id?: number) => {
        // id will always be defined here because allowClear is set to false
        const office = offices.find(o => o.id === id);
        props.onSelect(office);
    };

    return (
        <SelectComponent onApply={onApply} data={offices} selectedVal={selectedValue} allowClear={false}/>
    );
}

export default connect(mapStateToProps)(OfficesSelectFeature);
