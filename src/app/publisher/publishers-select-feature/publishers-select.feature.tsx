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
    dispatch: (action: PublisherAction) => void;
}

const PublishersSelectFeature = (props: PublishersSelectFeatureProps) => {
    const [publishers, setPublishers] = useState<IPublisher[]>([]);

    useMountEffect(() => {
        fetchPublishers(props.dispatch);
    });

    useEffect(() => {
        setPublishers(props.data);
    }, [props.data]);

    const onApply = (id: number) => {
        console.log(id, ' was selected');
    };

    return (
        <SelectComponent onApply={onApply} data={publishers} />
    );
}

export default connect(mapStateToProps)(PublishersSelectFeature);
