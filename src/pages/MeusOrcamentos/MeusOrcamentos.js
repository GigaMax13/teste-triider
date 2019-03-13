import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { CardOrcamento } from '../../components/CardOrcamento';
import { Creators } from '../../store/modules/Orders';

import './MeusOrcamentos.scss';

const status = {
  aberto: [''],
  cancelado: ['cancelado'],
  finalizado: ['finalizado', 'contratado'],
};

class MeusOrcamentos extends Component {
  state = {
    currentFilter: '',
  };

  componentDidMount() {
    this.props.getOrders();
  }

  filterByStatus = (filter) => {
    const {
      orders: {
        isLoading,
        hasError,
        data: orders,
      }
    } = this.props;

    if (isLoading || hasError) {
      return [];
    }

    return orders.filter(({ status: orderStatus }) => filter.indexOf(orderStatus) >= 0);
  };

  render() {
    const {
      orders: {
        isLoading,
        hasError,
        data: orders,
      }
    } = this.props;

    if (isLoading) {
      return (
        <section className='meus-orcamentos meus-orcamentos--centralized-content'>
          <FontAwesomeIcon className='meus-orcamentos__spinner' spin icon={faSpinner} />
        </section>
      );
    }

    if (hasError) {
      return (
        <section className='meus-orcamentos meus-orcamentos--centralized-content'>
          <h4 className='meus-orcamentos__error'>Erro inesperado, tente novamente mais tarde.</h4>
        </section>
      );
    }

    return (
      <div className='meus-orcamentos'>
        <header className='meus-orcamentos__header'>
          <h1 className='meus-orcamentos__title'>MEUS ORÇAMENTOS</h1>
          <ul className='meus-orcamentos__list'>
            <li
              className={classNames('meus-orcamentos__filter', {
                'meus-orcamentos__filter--active': this.state.currentFilter === 'aberto',
              })}
              onClick={() => this.setState({ currentFilter: 'aberto' })}
            >
              Abertos ({this.filterByStatus(status.aberto).length})
            </li>
            <li
              className={classNames('meus-orcamentos__filter', {
                'meus-orcamentos__filter--active': this.state.currentFilter === 'finalizado',
              })}
              onClick={() => this.setState({ currentFilter: 'finalizado' })}
            >
              Finalizados ({this.filterByStatus(status.finalizado).length})
            </li>
            <li
              className={classNames('meus-orcamentos__filter', {
                'meus-orcamentos__filter--active': this.state.currentFilter === 'cancelado',
              })}
              onClick={() => this.setState({ currentFilter: 'cancelado' })}
            >
              Cancelados ({this.filterByStatus(status.cancelado).length})
            </li>
          </ul>
        </header>
        <section className='meus-orcamentos__cards'>
          {(() => {
            if (this.state.currentFilter !== '') {
              return this.filterByStatus(status[this.state.currentFilter]).map(({ serviceName, status, quotes }, index) => (
                <CardOrcamento name={serviceName} status={status} quotes={quotes} key={index} />
              ));
            }

            return orders.map(({ serviceName, status, quotes }, index) => (
              <CardOrcamento name={serviceName} status={status} quotes={quotes} key={index} />
            ));
          })()}
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ orders }) => ({
  orders,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeusOrcamentos);
