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
}

const OfficesSelectFeature = (props: OfficesSelectFeatureProps) => {
    const [offices, setOffices] = useState<IOffice[]>([]);
    const [defaultVal, setDefaultVal] = useState(1);

    useMountEffect(() => {
        fetchOffices(props.dispatch);
    });

    useEffect(() => {
        setOffices(props.data);
        const defaultVal = props.data.length ? props.data[0].id : 1;
        setDefaultVal(defaultVal);
    }, [props.data]);

    const onApply = (id: number) => {
        console.log(id, ' was selected');
    };

    return (
        <SelectComponent onApply={onApply} data={offices} defaultVal={defaultVal}/>
    );
}

export default connect(mapStateToProps)(OfficesSelectFeature);
