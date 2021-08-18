import EditEmployeeFormComponent from './edit-form/edit-employee-form.component';
import React from 'react';
import EmployeesList from './list/employee-list.component';
import {IEmployee, IEmployeeStoreState} from './interfaces';
import {connect} from 'react-redux';
import {RootState} from '../store';
import {EMPLOYEE_ACTIONS_TYPES, EmployeeAction} from './employee.actions';
import {fetchEmployees} from './employee.effects';

const mapStateToProps = ({employee}: RootState) => {
    return {
        ...employee
    };
};

interface IEmployeeManagementState {
    isEditFormVisible: boolean;
    employees: Map<number, IEmployee>;
    editableEntity: IEmployee | null;
    lastMaxId: number;
}

type EmployeeManagementFeatureProps = IEmployeeStoreState & {
    dispatch: (action: EmployeeAction) => void;
}

class EmployeeManagementFeature extends React.Component<EmployeeManagementFeatureProps, IEmployeeManagementState> {

    constructor(props: EmployeeManagementFeatureProps) {
        super(props);
        this.state = {
            employees: props.data,
            isEditFormVisible: false,
            editableEntity: null,
            lastMaxId: 0
        };
    }

    componentDidMount() {
        fetchEmployees(this.props.dispatch);
    }

    componentDidUpdate(
        prevProps: Readonly<EmployeeManagementFeatureProps>,
        prevState: Readonly<IEmployeeManagementState>
    ) {
        if (prevProps.data !== this.props.data) {
            let maxId = this.state.lastMaxId;
            if (maxId === 0) {
                const ids = Array.from(this.props.data.values()).map(e => e.id);
                maxId = Math.max(...ids);
            }
            this.setState({
                ...this.state,
                employees: this.props.data,
                lastMaxId: maxId
            });
        }
    }

    /**
     * Opens modal to edit employee.
     */
    onEditEmployee = (e: IEmployee) => {
        this.setState({
            ...this.state,
            isEditFormVisible: true,
            editableEntity: e
        });
    }

    /**
     * Remove employee
     */
    onRemoveEmployee = (id: number) => {

    }

    /**
     * Opens modal to add new employee.
     */
    onAddEmployee = () => {
        const id = this.state.lastMaxId + 1;
        this.setState({
            ...this.state,
            isEditFormVisible: true,
            lastMaxId: id,
            editableEntity: {
                id
            } as IEmployee
        });
    }

    /**
     * Apply new employee adding or editing result.
     */
    onEditApply = (e: IEmployee) => {
        this.props.dispatch({
            type: !!this.state.editableEntity ?
                EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_UPDATE :
                EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_ADD,
            payload: e
        });
        this.setState({
            ...this.state,
            isEditFormVisible: false,
            editableEntity: null
        });
    }

    onEditCancel = () => {
        this.setState({
            ...this.state,
            editableEntity: null,
            isEditFormVisible: false
        });
    }

    render() {
        return (
            <div>
                <EmployeesList
                    isPending={this.props.isPending}
                    data={Array.from(this.state.employees.values())}
                    onEditHandler={this.onEditEmployee}
                    onRemoveHandler={this.onRemoveEmployee}
                    onAddHandler={this.onAddEmployee}
                />
                <EditEmployeeFormComponent
                    visible={this.state.isEditFormVisible}
                    onApply={this.onEditApply}
                    onCancel={this.onEditCancel}
                    editableEmployee={this.state.editableEntity}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(EmployeeManagementFeature);
