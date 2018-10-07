import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

const title = {
  padding: '10px',
  fontSize: '30px'
}

const viewDetail = {
  paddingLeft: '10px'
}



class AthleteIndex extends Component {
  static async getInitialProps() {
    const athletes = await factory.methods.getDeployedCampaigns().call();

    return { athletes };
  }

  renderAthletes() {
    const items = this.props.athletes.map(address => {
      return {
        header: address,
        description: (
          [
            <h2 key="1">Clarence Bo</h2>,
            <img key="2" src="https://www.mercurynews.com/wp-content/uploads/2017/09/bng-l-stfrancis-0902-09.jpg?w=525" height="42" width="42"/>,
            <Link key="3" route={`/athletes/${address}`}>
              <a style={viewDetail}>View Details</a>
            </Link>
        ]
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h1 style={title}>Athletes</h1>

          <Link route="/athletes/new">
            <a>
              <Button
                floated="right"
                content="Add Athlete"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderAthletes()}
        </div>
      </Layout>
    );
  }
}

export default AthleteIndex;
