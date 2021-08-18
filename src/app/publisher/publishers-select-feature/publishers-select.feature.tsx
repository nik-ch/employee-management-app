import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import {IPublisher, IPublisherStoreState} from '../interfaces';
import {SelectComponent} from '../../shared/select-component';
import {useMountEffect} from '../../hooks';
import {PublisherAction} from '../publisher.actions';
import {fetchPublishers} from '../publisher.effects';

const mapStateToProps = ({publisher}: RootState) => {
    return {
        ...publisher
    };
};

type PublishersSelectFeatureProps = IPublisherStoreState & {
    dispatch: (action: PublisherAction) => void
    onSelect: (p: IPublisher | null) => void;
    value?: IPublisher;
}

const PublishersSelectFeature = (props: PublishersSelectFeatureProps) => {
    const [publishers, setPublishers] = useState<IPublisher[]>([]);
    const [selectedVal, setSelectedValue] = useState<number | null>(null);

    useMountEffect(() => {
        fetchPublishers(props.dispatch);
    });

    useEffect(() => {
        setPublishers(props.data);
    }, [props.data]);

    useEffect(() => {
        if (props.value) {
            setSelectedValue(props.value.id);
        }
    }, [props.value]);

    const onApply = (id: number) => {
        const publisher = publishers.find(p => p.id === id);
        props.onSelect(publisher || null);
    };

    return (
        <SelectComponent onApply={onApply} data={publishers} selectedVal={selectedVal} allowClear={true} />
    );
}

export default connect(mapStateToProps)(PublishersSelectFeature);
