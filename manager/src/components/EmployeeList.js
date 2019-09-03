import _ from 'lodash';
import React, { Component } from 'react';
import { View, FlatList, Text, YellowBox } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './Listitem';
import { Spinner } from './common';
YellowBox.ignoreWarnings(['Remote debugger', 'Setting a timer']);

class EmployeeList extends Component {
    

    componentDidMount() {
        this.props.employeesFetch();
    }

    renderItem = ({ item }) => < ListItem employee = { item }/>;

    render() {
        return (
            <View styles={styles.container } >
                <FlatList data ={ this.props.employees } keyExtractor= { (item) => item.key } renderItem = { this.renderItem } />
                <Text style={ styles.errorTextStyle }> { this.props.error && this.props.error } </Text>
                { this.props.loading && <Spinner /> }
            </View>

        );

    }

}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val,uid }
    });

    return { employees };

};

const styles = {
    container: { flex: 1 },

    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
