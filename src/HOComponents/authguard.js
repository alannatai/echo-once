import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (OriginalComponent) => {
    class MixedComponent extends Component {

        checkAuth() {
            if (!this.props.isAuth && !this.props.jwtToken) {
                this.props.history.push('/login');
            }
        }

        componentDidMount() {
            this.checkAuth();
        }

        componentDidUpdate() {
            this.checkAuth();
        }

        render() {
            return (
                <div>
                    <OriginalComponent {...this.props} />
                </div>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            isAuth: state.auth.isAuthenticated,
            jwtToken: state.auth.token
        }
    }

    return connect(mapStateToProps)(MixedComponent);
};


