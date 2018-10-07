import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

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
            <h3 key="1">Clarence Bo</h3>,
            <img key="2" src="https://en.wikipedia.org/wiki/Marshawn_Lynch#/media/File:Marshawn_Lynch_Pro_Bowl_2013.jpg" height="42" width="42"/>,
            <Link key="3" route={`/athletes/${address}`}>
              <a>View Details</a>
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
          <h3>Athletes</h3>

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
